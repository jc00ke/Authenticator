function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
        // Service worker isn't supported
        return;
    }
    var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    if (!isLocalhost && window.location.protocol !== 'https:') {
        console.warn('Service worker is supported in this browser but cannot ' +
            'work on a page that isn\'t accessed by HTTPS.');
        return;
    }

    navigator.serviceWorker.register('service-worker.js')
        .catch(function (e) {
            console.error('Error during service worker registration:', e);
        });
};

registerServiceWorker();

Authenticator = {};
Authenticator.promises = {};
Authenticator.promises.getTOTP = function (label, secret) {
    return new Promise(function (resolve, reject) {
        function dec2hex(s) {
            return (s < 15.5 ? "0" : "") + Math.round(s).toString(16)
        }

        function hex2dec(s) {
            return parseInt(s, 16)
        }

        function base32tohex(base32) {
            var base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            var bits = "";
            var hex = "";
            for (var i = 0; i < base32.length; i++) {
                var val = base32chars.indexOf(base32.charAt(i).toUpperCase());
                bits += leftpad(val.toString(2), 5, "0")
            }
            for (var i = 0; i + 4 <= bits.length; i += 4) {
                var chunk = bits.substr(i, 4);
                hex = hex + parseInt(chunk, 2).toString(16)
            }
            return hex
        }

        function leftpad(str, len, pad) {
            if (len + 1 >= str.length) {
                str = Array(len + 1 - str.length).join(pad) + str
            }
            return str
        }

        function getOTP(label, secret) {
            secret = secret.replace(/ /g, "");
            var result = {};
            result.secret = secret;
            var key = base32tohex(secret);
            var epoch = Math.round((new Date).getTime() / 1e3);
            var time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, "0");
            var shaObj = new jsSHA("SHA-1", "HEX");
            shaObj.setHMACKey(key, "HEX");
            shaObj.update(time);
            var hmac = shaObj.getHMAC("HEX");
            if (hmac == "KEY MUST BE IN BYTE INCREMENTS") {} else {
                var offset = hex2dec(hmac.substring(hmac.length - 1));
                var part1 = hmac.substr(0, offset * 2);
                var part2 = hmac.substr(offset * 2, 8);
                var part3 = hmac.substr(offset * 2 + 8, hmac.length - offset)
            }
            var otp = (hex2dec(hmac.substr(offset * 2, 8)) & hex2dec("7fffffff")) + "";
            otp = otp.substr(otp.length - 6, 6);
            result.code = otp;
            var epoch = Math.round((new Date).getTime() / 1e3);
            result.time = 30 - epoch % 30;
            result.label = label;
            return result
        }
        try {
            resolve(getOTP(label, secret));
        } catch (ex) {
            reject(ex);
        }
    });
};

Authenticator.storage = {};
Authenticator.storage.getAccounts = function () {
    return JSON.parse(localStorage.accounts || "[]");
};
Authenticator.storage.setAccounts = function (accounts) {
    localStorage.accounts = JSON.stringify(accounts) || localStorage.accounts || "[]";
};
Authenticator.storage.addAccount = function (account) {
    var accounts = Authenticator.storage.getAccounts();
    if (account) {
        accounts = _.uniq(_.concat(accounts, account));
    };
    Authenticator.storage.setAccounts(accounts);
};
Authenticator.storage.removeAccount = function (account) {
    var accounts = Authenticator.storage.getAccounts();
    if (account) {
        accounts = _.filter(accounts, function (i) {
            return !(_.isEqual(i, account));
        });
    };
    Authenticator.storage.setAccounts(accounts);
};
Authenticator.storage.mergeAccounts = function (newAccounts) {
    var accounts = Authenticator.storage.getAccounts();
    if (newAccounts) {
        accounts = _.uniq(_.concat(accounts, _.filter(newAccounts, function (i) {
            if (_.has(i, "label") && _.has(i, "secret")) {
                return true;
            } else {
                console.log("Skipping import of account, missing property", i);
                return false;
            }
        })));
    };
    Authenticator.storage.setAccounts(accounts);
};
Authenticator.storage.toImportRoute = function () {
    return Authenticator.routing.toHashString({
        page: "import",
        data: Authenticator.storage.getAccounts()
    });
};
Authenticator.storage.toImportURL = function () {
    return Authenticator.routing.toPageURL({
        page: "import",
        data: Authenticator.storage.getAccounts()
    });
};

Authenticator.routing = {};
Authenticator.routing.parse = function () {
    var text = _.trimEnd(window.location.hash.replace("#/", "").replace("#", ""), "/");
    var data = JSON.parse(LZString.decompressFromBase64(text.split("/!").slice(1).join("/!")) || "{}");
    var page = (text.split("/!")[0]);
    return {
        data: data,
        page: page
    };
};
Authenticator.routing.toHashString = function (route) {
    return "/" + route.page + "/!" + LZString.compressToBase64(JSON.stringify(route.data));
};
Authenticator.routing.toPageURL = function (route) {
    var url = document.createElement('a');
    url.href = window.location.toString();
    url.hash = Authenticator.routing.toHashString(route);
    return url.href;
};
Authenticator.routing.set = function (route) {
    window.location.hash = Authenticator.routing.toHashString(route);
};
Authenticator.routing.oldRoute = {};
Authenticator.routing.update = function () {
    var route = Authenticator.routing.parse();
    if (_.isEqual(route, Authenticator.routing.oldRoute)) {
        return false;
    }
    Authenticator.appElement.className = _.join(_.concat(_.filter(_.split(Authenticator.appElement.className, " "), function (cn) {
        return !(_.startsWith(cn, "on-"))
    }), "on-" + route.page), " ");
    _.forEach(Authenticator.views, function (view) {
        view.hide();
    });
    try {
        (Authenticator.views[route.page] || Authenticator.views["notfound"]).show(route.data);
    } catch (ex) {}
    Authenticator.routing.oldRoute = route;
};

Authenticator.views = {};

Authenticator.views.import = {};
Authenticator.views.import.show = function (data) {
    Authenticator.storage.mergeAccounts(data);
    Authenticator.routing.set({
        page: "main",
        data: {}
    });
};
Authenticator.views.import.hide = function () {};
Authenticator.views.import.init = function () {};

Authenticator.views.main = {};
Authenticator.views.main.show = function (data) {
    Authenticator.appElement.querySelector(".view-main").classList.add("active");
};
Authenticator.views.main.hide = function () {
    Authenticator.appElement.querySelector(".view-main").classList.remove("active");
};
Authenticator.views.main.init = function () {};

Authenticator.views.add = {};
Authenticator.views.add.scanner = null;
Authenticator.views.add.show = function (data) {
    Authenticator.appElement.querySelector(".view-add").classList.add("active");
    Authenticator.views.add.scanner = new Instascan.Scanner({
        video: document.getElementById('preview')
    });
    Authenticator.views.add.scanner.addListener('scan', function (content) {
        var urlsplit = content.split("/");
        if (urlsplit[0] == "otpauth:") {
            if (urlsplit[2] == "totp") {
                try {
                    var spl = urlsplit[3].split("?");
                    var label = decodeURI(spl[0]);
                    var secret = "-";
                    spl = _.map(spl[1].split("&"), function (e) {
                        return e.split("=")
                    });
                    _.forEach(spl, function (e) {
                        try {
                            if (e[0] == "issuer") {
                                label = e[1] + " (" + label + ")";
                            }
                            if (e[0] == "secret") {
                                secret = e[1];
                            }
                        } catch (ex) {}
                    });
                    if (secret.length % 2 > 0) {
                        alert("Error parsing qr code secret. Try entering the secret manually.");
                        Authenticator.views.add.scanner.stop();
                    }
                    Authenticator.storage.addAccount({
                        label: label,
                        secret: secret
                    });
                    alert("Account added successfully");
                    Authenticator.views.add.scanner.stop();
                    Authenticator.routing.set({
                        page: "main",
                        data: {}
                    });
                    Authenticator.views.add.scanner.stop();
                } catch (ex) {
                    alert("Error parsing qr code. Try entering the secret manually.");
                }
            } else {
                alert("Unsupported OTP scheme")
            }
        } else if (content.split("#")[0] == window.location.toString().split("#")[0]) {
            window.location = content;
        } else {
            alert("Not a TOTP QR code")
        }
    });
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            Authenticator.views.add.scanner.start(cameras.pop());
            document.getElementById("previewlabel").style.display = "none";
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
};
Authenticator.views.add.hide = function () {
    Authenticator.appElement.querySelector(".view-add").classList.remove("active");
};
Authenticator.views.add.init = function () {
    var ael = Authenticator.appElement.querySelector(".view-add");
    ael.querySelector(".add").addEventListener("click", function (e) {
        if (ael.querySelector("input.secret").value.length % 2 != 0) {
            alert("Invalid secret");
            return;
        }
        Authenticator.storage.addAccount({
            label: ael.querySelector("input.tlabel").value,
            secret: ael.querySelector("input.secret").value
        });
        Authenticator.routing.set({
            page: "main",
            data: {}
        });
    });
};


Authenticator.views.settings = {};
Authenticator.views.settings.show = function (data) {
    Authenticator.appElement.querySelector(".view-settings").classList.add("active");
};
Authenticator.views.settings.hide = function () {
    Authenticator.appElement.querySelector(".view-settings").classList.remove("active");
};
Authenticator.views.settings.init = function () {
    var ael = Authenticator.appElement.querySelector(".view-settings");

};


Authenticator.views.export = {};
Authenticator.views.export.show = function (data) {
    Authenticator.appElement.querySelector(".view-export").classList.add("active");
    var ael = Authenticator.appElement.querySelector(".view-export");
    ael.querySelector(".url").innerText = Authenticator.storage.toImportURL();
    var qr = new QRious({
        element: ael.querySelector(".qr"),
        background: '#fff',
        backgroundAlpha: 0,
        foreground: '#000',
        foregroundAlpha: 1,
        level: 'H',
        padding: 5,
        size: 500,
        value: Authenticator.storage.toImportURL()
    });
    ael.querySelector(".json").innerText = JSON.stringify(Authenticator.storage.getAccounts());
};
Authenticator.views.export.hide = function () {
    Authenticator.appElement.querySelector(".view-export").classList.remove("active");
};
Authenticator.views.export.init = function () {
    var ael = Authenticator.appElement.querySelector(".view-export");
};


Authenticator.createAccountObject = function (label, secret) {
    return {
        label: label,
        secret: secret
    };
};

Authenticator.updateLists = function () {
    _.forEach(document.querySelectorAll(".app .accounts .account"), function (accountEl) {
        if (_.indexOf(Authenticator.storage.getAccounts(), accountEl.getAttribute("data-id")) == -1) {
            accountEl.parentNode.removeChild(accountEl);
        };
    });

    _.forEach(document.querySelectorAll(".app .accounts"), function (listEl) {
        _.forEach(Authenticator.storage.getAccounts(), function (account) {
            var accountId = (function getAccountId(account) {
                var shaObj = new jsSHA("SHA-1", "TEXT");
                shaObj.update(account.label);
                shaObj.update(account.secret);
                return "account-" + shaObj.getHash("HEX");
            })(account);

            Authenticator.promises.getTOTP(account.label, account.secret).then(function (result) {
                var el = listEl.querySelector("." + accountId) || listEl.appendChild((function createAccountElement(classNames) {
                    var el = document.createElement("div");
                    el.className = "account item " + classNames;
                    el.innerHTML = '<div class="left"><div class="label"></div><div class="code"></div></div><div class="right"><a class="remove">X</a><div class="time"></div></div>';
                    _.forEach(el.querySelectorAll(".remove"), function (rb) {
                        rb.addEventListener("click", function (e) {
                            if (confirm("Are you sure you want to remove this account? If you remove this account, make sure you have another way of accessing it. This action is irreversible.")) {
                                if (confirm("Are you really sure?")) {
                                    Authenticator.storage.removeAccount(JSON.parse(e.target.getAttribute("data-data")));
                                }
                            }
                        });
                    });
                    return el;
                })(accountId));

                if (el.getAttribute("data-id") != accountId) {
                    el.setAttribute("data-id", accountId);
                }
                _.forEach(el.querySelectorAll(".remove"), function (rb) {
                    rb.setAttribute("data-data", JSON.stringify(account));
                });
                _.forOwn(result, function (value, key) {
                    el.setAttribute("data-" + key, value);
                    _.forEach(el.querySelectorAll("." + key), function (el) {
                        if (el.innerHTML != value) {
                            el.innerHTML = value;
                        }
                    });
                });
            });
        });
    });
};

Authenticator.init = function () {
    Authenticator.appElement = document.querySelector(".app");
    Authenticator.routing.update();
    window.setInterval(Authenticator.routing.update, 100);
    Authenticator.updateLists();
    window.setInterval(Authenticator.updateLists, 700);
    _.forEach(Authenticator.views, function (view) {
        view.init();
    });
};
Authenticator.init();