/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["README.md","4c73ba6ad1f6c9fc8076500f738cefc1"],["css/font-awesome-4.7.0/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["css/font-awesome-4.7.0/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["css/font-awesome-4.7.0/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["css/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["css/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["css/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["css/lato/css/lato.css","d8911b7750c35a5098d2b29800e41626"],["css/lato/fonts/lato-v11-latin-100.eot","f8e1b1b8f5e5de702bfadeb2baca0a71"],["css/lato/fonts/lato-v11-latin-100.svg","1e9336bd5288b144d4228197c17cca58"],["css/lato/fonts/lato-v11-latin-100.woff","126c1aabe643374091e467919999855a"],["css/lato/fonts/lato-v11-latin-100.woff2","ded71877ce3f09503bbed3fc0dadfb95"],["css/lato/fonts/lato-v11-latin-100italic.eot","6c573c04e0ef766863827004195243b8"],["css/lato/fonts/lato-v11-latin-100italic.svg","a4724bfdb4a14f6ac47d5920468881ef"],["css/lato/fonts/lato-v11-latin-100italic.woff","335bd26119141a1c04de54f93ee0bd55"],["css/lato/fonts/lato-v11-latin-100italic.woff2","af8bef34fc709577fc0c31293e7f4fde"],["css/lato/fonts/lato-v11-latin-300.eot","100dadd6d763dfa4904c4fb349f8ea44"],["css/lato/fonts/lato-v11-latin-300.svg","1aed0c80f99d379f35b761221aa96c41"],["css/lato/fonts/lato-v11-latin-300.woff","6f934cd8100db640286be1ff3d110977"],["css/lato/fonts/lato-v11-latin-300.woff2","3e86c4948704e8b9a85f00f98feb963f"],["css/lato/fonts/lato-v11-latin-300italic.eot","99069a5f56a7f862b3db88e6ea47e59a"],["css/lato/fonts/lato-v11-latin-300italic.svg","7ef7d381211e47f7daa2a9de28c66001"],["css/lato/fonts/lato-v11-latin-300italic.woff","5c5b445aed08fdee559c47925290c9a5"],["css/lato/fonts/lato-v11-latin-300italic.woff2","5f662e8ae2643cb62d51bad100ac2d82"],["css/lato/fonts/lato-v11-latin-700.eot","43a8fa5531f224265950e467c404bf45"],["css/lato/fonts/lato-v11-latin-700.svg","cfdfec6d275f31893ce409a3824ff1dc"],["css/lato/fonts/lato-v11-latin-700.woff","fd373951a3af195dd62bbf05df656354"],["css/lato/fonts/lato-v11-latin-700.woff2","649e18eb6a853f18e49f440ab64cdd55"],["css/lato/fonts/lato-v11-latin-700italic.eot","d83033ac3e4a10a5003a0dba42966ae0"],["css/lato/fonts/lato-v11-latin-700italic.svg","fd20a0e8d7cb8f40aa501e96564e9781"],["css/lato/fonts/lato-v11-latin-700italic.woff","2fe180836fd24486f44525c55ec3d3d1"],["css/lato/fonts/lato-v11-latin-700italic.woff2","50e49397acfe4a31c13cff50b90b89e6"],["css/lato/fonts/lato-v11-latin-900.eot","4f7ab788ecdf5895c368acc00a1c7a5f"],["css/lato/fonts/lato-v11-latin-900.svg","030643bf98d2b53a6f2e2da6185f159f"],["css/lato/fonts/lato-v11-latin-900.woff","c208c97845844a067d4a8f900c225847"],["css/lato/fonts/lato-v11-latin-900.woff2","f377f4433f32e365e4c3162cfb0b0f8c"],["css/lato/fonts/lato-v11-latin-900italic.eot","b937fc0b5ed419a60559036e555856a7"],["css/lato/fonts/lato-v11-latin-900italic.svg","e5419513ee35cc26562681d675a29612"],["css/lato/fonts/lato-v11-latin-900italic.woff","59f84cca32a20f23afdf3304535f1b01"],["css/lato/fonts/lato-v11-latin-900italic.woff2","9d33e2f45478437bac5afbbdf1b5712d"],["css/lato/fonts/lato-v11-latin-italic.eot","078c3cd67e4015cb4abcceee951f8567"],["css/lato/fonts/lato-v11-latin-italic.svg","8f871c6d44e32d14b1ed91e446b243c0"],["css/lato/fonts/lato-v11-latin-italic.woff","a8fc7661c63e697c2b71a11b93a6fcf4"],["css/lato/fonts/lato-v11-latin-italic.woff2","f8a9a7a93c2c322957c8d8b61929bfe5"],["css/lato/fonts/lato-v11-latin-regular.eot","dc7b7052df5ca6a318a5853041d7d0f2"],["css/lato/fonts/lato-v11-latin-regular.svg","ee3a1c8ce9d9ae2f5373fd4339b83be8"],["css/lato/fonts/lato-v11-latin-regular.woff","f137ee4862785a1518fb3056eccdc99b"],["css/lato/fonts/lato-v11-latin-regular.woff2","6748e0e1c0bef825e16c649fd2ad5691"],["css/normalize.css","be7f3425b44480dcf3aab3408f632f37"],["css/style.css","b73edd377d258b1499e1b1c59414f5cd"],["favicon.ico","964ec73d17418f58f8ac18733332ac0a"],["images/icons/apple-touch-icon.png","bfade25948f586fd621874be09ffc021"],["images/icons/chrome-touch-icon-192x192.png","d4f463a96b2be266c6c8d391f830bd7f"],["images/icons/icon-512x512.png","ee3f082419b41e003f211369f62181b0"],["images/icons/icon-72x72.png","485a7487c2407cdb8391d25dcbaafac0"],["images/icons/icon-96x96.png","c0a04fe6598905ee78381e9c4f0cb1bf"],["images/icons/ms-icon-144x144\\.png","d4f463a96b2be266c6c8d391f830bd7f"],["index.html","5466ec3c7950fdcd6577682d0e5ede21"],["js/classList.min.js","c217b6a28fd0f2178e1236dfc70ea91a"],["js/es6-promise.auto.min.js","96289721931c46bf44f3fdbcb1c44913"],["js/instascan.min.js","4befa7049ff55d6f3992f654f3c74147"],["js/lodash.min.js","c8515f131f3194c32a3670c8e274fab6"],["js/lz-string.min.js","109c13d75d0b6fc6440d3e98f803d396"],["js/qrious.min.js","cb7866215214dda4943182f5577486a6"],["js/script.js","aeab76025981c284e3e6dc1ebdc17dc6"],["js/sha1.js","9c11a030f468604a41872576f4d9edc5"],["manifest.json","0ce381a5fe5c205799ddcff7968be59b"],["node_modules/array-find-index/index.js","a19a7b6671943fe3f99fecdb60ac106d"],["node_modules/array-find-index/package.json","a8fc1cf6e5b93e4f1b728805bf02f35e"],["node_modules/array-find-index/readme.md","fb54891bdc5f1c6bd39789a218aadcfc"],["node_modules/balanced-match/LICENSE.md","7fa99ddc3424107350ca6e9a24552085"],["node_modules/balanced-match/README.md","2b81a22fa44f4237c9a42b1cbb260159"],["node_modules/balanced-match/index.js","77122288ffceba0a2f5079eb6b1b31bf"],["node_modules/balanced-match/package.json","430b3db990a6d90b93a32648c69d5199"],["node_modules/brace-expansion/README.md","30f36d7d796aee78118b7336b71cef02"],["node_modules/brace-expansion/index.js","2e265baed5f4147160f144389684af9c"],["node_modules/brace-expansion/package.json","daa496415d1c68f81c02c8a6bed0ace9"],["node_modules/builtin-modules/builtin-modules.json","04f011c9b31017ab5fde0e39fe575364"],["node_modules/builtin-modules/index.js","fd9d9306e79e22e86c5a198c63eceab8"],["node_modules/builtin-modules/package.json","d83d98183c32b9a09d9c16e8992bd397"],["node_modules/builtin-modules/readme.md","982c991e830c4b263f77fb2c90503e07"],["node_modules/builtin-modules/static.js","ad704575c4e629f5cdb57f65de0686d6"],["node_modules/camelcase-keys/index.js","c558ce41088691f6c3a4f79625809061"],["node_modules/camelcase-keys/package.json","5693ff57571169b62aff48ae160ad262"],["node_modules/camelcase-keys/readme.md","47508c9695c6d00d7f9f4fcffa09366d"],["node_modules/camelcase/index.js","760ce1ead8f37c3ffc9f948288be5944"],["node_modules/camelcase/package.json","10cf19fcc046f1e0446a2b8bf02c73fd"],["node_modules/camelcase/readme.md","720828d016c10e1a1eb88f2734a86bf8"],["node_modules/concat-map/README.markdown","3de808d1c878e1d12f12c8d849710db2"],["node_modules/concat-map/example/map.js","42b2341e75e2e29012793c31222c2783"],["node_modules/concat-map/index.js","8ef754ba23fdd37b3e8a1c52739ace80"],["node_modules/concat-map/package.json","4254a5c95ccac096b172d76132314485"],["node_modules/concat-map/test/map.js","a8e1d80e4629945216de220e4b580cf5"],["node_modules/currently-unhandled/browser.js","f85cd6f6159c1a744096dd98d0a8692c"],["node_modules/currently-unhandled/core.js","2e6014188dde097d5dc79ece92235eda"],["node_modules/currently-unhandled/index.js","2f869c32daa8065f4ebe6f9c2cf69f87"],["node_modules/currently-unhandled/package.json","dc7a777b76973d55346177a2aca781ee"],["node_modules/currently-unhandled/readme.md","20db8e3cc5aaf49c3ee1892b3137950b"],["node_modules/decamelize/index.js","983084e6146528df1707b0aa3ff6cd9a"],["node_modules/decamelize/package.json","fa669041521d9b485ff9c1e8179e3e3f"],["node_modules/decamelize/readme.md","71b1684a019e2f3d5cc76429939db237"],["node_modules/dom-urls/README.md","f9bf68aac4f4920939e16768f6cfa11c"],["node_modules/dom-urls/index.js","43629b92a6fe6b72e85a1e4c3ca5391e"],["node_modules/dom-urls/package.json","b9ab9e556c106ee1a641fa5f35ff74f0"],["node_modules/error-ex/README.md","fb8ffd816db556d2ea5ee059ba89b298"],["node_modules/error-ex/index.js","39336b80f07e788a2cb2516244f334a5"],["node_modules/error-ex/package.json","c19f88c16a9497b8fd66a559af66fb6f"],["node_modules/es6-promise/CHANGELOG.md","037e64f7daf009d007a4dc1225fa7f40"],["node_modules/es6-promise/README.md","0e4a5d785545af3465db1bbe35e55406"],["node_modules/es6-promise/dist/es6-promise.js","7a22a7e9c39b1f175fbec948c18e87e3"],["node_modules/es6-promise/dist/es6-promise.map","22db7e4cc30ba3ab42cdbda2b8a2ab40"],["node_modules/es6-promise/dist/es6-promise.min.js","b6b92e1fa8d691d068902a60d472aa73"],["node_modules/es6-promise/dist/es6-promise.min.map","aed4d8ff2f3d06a5a7f090a053ca7df0"],["node_modules/es6-promise/es6-promise.d.ts","f795c4063c2cb67403b0f61df39d708c"],["node_modules/es6-promise/lib/es6-promise.js","d4df223ad4d031d8a86e9fd3d96999b9"],["node_modules/es6-promise/lib/es6-promise/-internal.js","d62fa42517894319768fb27ee8432574"],["node_modules/es6-promise/lib/es6-promise/asap.js","f72a180508d44b7b06bd0c06d870b7d2"],["node_modules/es6-promise/lib/es6-promise/enumerator.js","f6c7a93c2eb05cade8d5e9a1eea4e4b5"],["node_modules/es6-promise/lib/es6-promise/polyfill.js","f44f337caeed8a78be0ac4f1a59a44fa"],["node_modules/es6-promise/lib/es6-promise/promise.js","a205582bf15fc3c35152f3dd2e2a66f7"],["node_modules/es6-promise/lib/es6-promise/promise/all.js","3b322588b808ef29090698e5d47d7d05"],["node_modules/es6-promise/lib/es6-promise/promise/race.js","f3134eff4fad30ef5396989302920704"],["node_modules/es6-promise/lib/es6-promise/promise/reject.js","4926bda3b87c32f9608a3c145ff636d2"],["node_modules/es6-promise/lib/es6-promise/promise/resolve.js","bcdb088cd3b029540ae383e793fe4934"],["node_modules/es6-promise/lib/es6-promise/tags.7JV68t","d41d8cd98f00b204e9800998ecf8427e"],["node_modules/es6-promise/lib/es6-promise/then.js","6bce50765808193773ab54791f030b45"],["node_modules/es6-promise/lib/es6-promise/utils.js","76b4a609fcb2f90e1d02826b713f90b2"],["node_modules/es6-promise/package.json","94f7c55bf6cc55f6292f8ea96125099c"],["node_modules/find-up/index.js","273b843d5994136674f491d7a2c5ecfe"],["node_modules/find-up/package.json","a930271b2c100def49dd97b03adfbb5f"],["node_modules/find-up/readme.md","74183eb5676ad6df10dd4c5597ccdf14"],["node_modules/get-stdin/index.js","c82d99b0454e15c5319dc5b1e37527e3"],["node_modules/get-stdin/package.json","254e8350f626304cfccd3f9952f17714"],["node_modules/get-stdin/readme.md","66e9c35acf0e22691b69f94f59f99edb"],["node_modules/glob/README.md","c0346b1080d640e7361b44467d4d0677"],["node_modules/glob/common.js","a4f140e38b691107fe3a267fc53e0c62"],["node_modules/glob/glob.js","3be897d6329227c980d8071bf8fcc6d9"],["node_modules/glob/package.json","25ea952cc1f8179cf4b8592d8fa56d09"],["node_modules/glob/sync.js","d70638435fdcfeab9eb7de5250ba67cc"],["node_modules/graceful-fs/README.md","5ef783d2adc5dc85a9e3934ec8c59d5c"],["node_modules/graceful-fs/fs.js","7fb9340b36e141a4944b13d205af3d1d"],["node_modules/graceful-fs/graceful-fs.js","0af3af2b5945a7073883fb5273f25893"],["node_modules/graceful-fs/legacy-streams.js","620fc152dc9bfa087f9901703b1e2616"],["node_modules/graceful-fs/package.json","be34bbfa8e803a8350acd0285eaa5841"],["node_modules/graceful-fs/polyfills.js","af45c9957edb1ef798122235655af168"],["node_modules/hosted-git-info/README.md","148506936d25ed045dbf4390ab8d6042"],["node_modules/hosted-git-info/git-host-info.js","1cb7a4b3b9f85c3a1abc654c8e863646"],["node_modules/hosted-git-info/git-host.js","ffa643bf87d05fba1039e654345cf8ce"],["node_modules/hosted-git-info/index.js","9fcb12a3fa8d257c974ac769f1236e16"],["node_modules/hosted-git-info/package.json","091645bafffc25372c33feec184600f8"],["node_modules/indent-string/index.js","b3a3b06e58214f950cb0d0fe34533da8"],["node_modules/indent-string/package.json","29d66b826148a388b8c1b8806ca0a7f5"],["node_modules/indent-string/readme.md","cc2ed38405f80830212136a10f78375c"],["node_modules/inflight/README.md","0a30dbf89df03dc7c954f830946f66d8"],["node_modules/inflight/inflight.js","42bbc3622abfefca5862fd0d12441a15"],["node_modules/inflight/package.json","ebfb12aa9f825b1669043fc53ba2e571"],["node_modules/inherits/README.md","de7eab94959b05c9765cad499ab092db"],["node_modules/inherits/inherits.js","09b210610125b162700734fb93dc892c"],["node_modules/inherits/inherits_browser.js","7c26fc24b695f2afbc284bbd5f64d6a4"],["node_modules/inherits/package.json","320b8e4773607d9ed328f3eca41c0d98"],["node_modules/is-arrayish/README.md","29707858a2c6eb8e14e3ca822ce48fb6"],["node_modules/is-arrayish/index.js","37d2f8bf6f5eaa32af9695936e137f8c"],["node_modules/is-arrayish/package.json","257047e0102ca06e777f928fae0f127f"],["node_modules/is-builtin-module/index.js","f63b2dd34de1163806fe7a045fdb393a"],["node_modules/is-builtin-module/package.json","d3b1221e237ec5eb31bb1f6c47917f29"],["node_modules/is-builtin-module/readme.md","bfba03a99873da652de79e6705436800"],["node_modules/is-finite/index.js","14531067f0794e449029d9268fbc0d5b"],["node_modules/is-finite/package.json","d5ace7979b721535803d71611133ae12"],["node_modules/is-finite/readme.md","99ae663cd22713c1977eda2a7f68278e"],["node_modules/is-utf8/README.md","d23a180a7623cd8e4c28a4bd204ca9a6"],["node_modules/is-utf8/is-utf8.js","d6bf49d9e457e9f115559194aca1e975"],["node_modules/is-utf8/package.json","eb8db2d25f04e7b6a673344893e696de"],["node_modules/isarray/README.md","d2f2d4e0c886ba00c26b830c666554f7"],["node_modules/isarray/build/build.js","d3005169d2c46521802b587ddc12bfb0"],["node_modules/isarray/component.json","32fed65eac22c95ae43ddfd1729b9bf3"],["node_modules/isarray/index.js","e8460ef833145a9652fba1bb4c47ede7"],["node_modules/isarray/package.json","86a45d598bcc1e9e9e6ff241df8b83ea"],["node_modules/load-json-file/index.js","b5b58c5d7d67c11d10cad6af497bcbc1"],["node_modules/load-json-file/package.json","2aef90df1f1bc3d3d1606cd05362ed7e"],["node_modules/load-json-file/readme.md","89694e455d0e132738a6a69d68424910"],["node_modules/lodash._reinterpolate/LICENSE.txt","ad20573d95563085adde70ee845966ea"],["node_modules/lodash._reinterpolate/README.md","f0b313c16f8ec10dc782d827be010ff3"],["node_modules/lodash._reinterpolate/index.js","d109289b492310fb94da2cae11126800"],["node_modules/lodash._reinterpolate/package.json","dc52d0fa7c7fc0b8057e968f4a37eda1"],["node_modules/lodash.defaults/README.md","56372a9407630abf28197a8335985853"],["node_modules/lodash.defaults/index.js","bc5e8d4b69b077619971c2d8a3bdf315"],["node_modules/lodash.defaults/package.json","1a3b1911b8e06dbf635ff944c297a76d"],["node_modules/lodash.template/README.md","e7c1a0587338ba0f8e8707ec3846bb70"],["node_modules/lodash.template/index.js","b1bda935446a88b2e10bf404e5167409"],["node_modules/lodash.template/package.json","4effd0a0ab2b5c721d55341fc0df18c1"],["node_modules/lodash.templatesettings/README.md","499943b66e8c7c707ddc79f8c0974be1"],["node_modules/lodash.templatesettings/index.js","6fc032aa4de90faaf8ae19020eb0bed5"],["node_modules/lodash.templatesettings/package.json","519e3a43cecc7d69b7e2d840f5aef2f1"],["node_modules/loud-rejection/api.js","fb03c580c6296df18b39350e22f0bd97"],["node_modules/loud-rejection/index.js","3288863ed82f117ea85d432a09974ce0"],["node_modules/loud-rejection/package.json","1217739d5c24b2a6dda802d5a6d9e1f8"],["node_modules/loud-rejection/readme.md","80d2f05fe951b3c139e1ed00cb7578a3"],["node_modules/loud-rejection/register.js","7308489c82a9faa09f4534df9098004c"],["node_modules/map-obj/index.js","2dbf2e519cb8026186d624ca503ca6e3"],["node_modules/map-obj/package.json","0bd0beb207094c1535c04a936f4daff1"],["node_modules/map-obj/readme.md","cb8ea918916d2c1c65a605a36775cac8"],["node_modules/meow/index.js","7d6747a9bc20191e44606431fe4658e2"],["node_modules/meow/package.json","bb4869ada1bcaeda97bf33b90bafe019"],["node_modules/meow/readme.md","4f1ff998325cd8bd7d371ebc7ed25c0f"],["node_modules/minimatch/README.md","69c8fd8e7fc4051b61c6343c0357be2b"],["node_modules/minimatch/minimatch.js","9e22ccffac9538b210d6bc9e120e8f15"],["node_modules/minimatch/package.json","1f3126b61789a16640cd3b8dd2035c47"],["node_modules/minimist/example/parse.js","559dd0b28e67e4da65c434476bc2c885"],["node_modules/minimist/index.js","c36f5714c734dba3d1cb40e836c1374b"],["node_modules/minimist/package.json","34f924ebf93bf9eed1571de41f018d99"],["node_modules/minimist/readme.markdown","c7b62ca1fbb8d8185e59da3d6e5ab397"],["node_modules/minimist/test/all_bool.js","0996869b339f45a72669d8638df020d3"],["node_modules/minimist/test/bool.js","e42588336909394bd2c0a02d8346a694"],["node_modules/minimist/test/dash.js","3912e17dca100d50c1bab4c7982d56dc"],["node_modules/minimist/test/default_bool.js","d97a3688462e13a7399204b153426be8"],["node_modules/minimist/test/dotted.js","16f59760e45e2cf7f835320635d59ce1"],["node_modules/minimist/test/kv_short.js","74c72f03ca3283bacd95ce6019fcd1e8"],["node_modules/minimist/test/long.js","652e865e69ae41e78d9ad95f8557f0a2"],["node_modules/minimist/test/num.js","3c6b959c2a952ca471797e28723fa8c5"],["node_modules/minimist/test/parse.js","466b0207dd29b19eefe9aff973472fb5"],["node_modules/minimist/test/parse_modified.js","d04f05190e5720bb1fb47be8f09f96d8"],["node_modules/minimist/test/short.js","a964fe2c657d6e71d1c3a2c8bc5ce79c"],["node_modules/minimist/test/stop_early.js","20dfd44d3acf4d24e21fa04c24841580"],["node_modules/minimist/test/unknown.js","68487dbf5d4323c19185167877da8736"],["node_modules/minimist/test/whitespace.js","caa1c589b42a96804176247191ccb980"],["node_modules/mkdirp/bin/cmd.js","9ef5fb33a1a94773afb7dc52b0dfbb5d"],["node_modules/mkdirp/bin/usage.txt","29298f0efcb0c0454a851886b91e00e2"],["node_modules/mkdirp/examples/pow.js","7440de96a1a111e53e3da08f0d8bb8eb"],["node_modules/mkdirp/index.js","7941341b14e76ae88be8dbad2202798e"],["node_modules/mkdirp/node_modules/minimist/example/parse.js","559dd0b28e67e4da65c434476bc2c885"],["node_modules/mkdirp/node_modules/minimist/index.js","822fc8889c4bc1e1906b9e51560e7978"],["node_modules/mkdirp/node_modules/minimist/package.json","834dc7e23202750a9ba0d993c675ec03"],["node_modules/mkdirp/node_modules/minimist/readme.markdown","651854ca82c2fd452b10b7874d9b4ebc"],["node_modules/mkdirp/node_modules/minimist/test/dash.js","190934d8330fccc8c5aa07a3e43f028d"],["node_modules/mkdirp/node_modules/minimist/test/default_bool.js","c3598075b51486aa545526d13b454c66"],["node_modules/mkdirp/node_modules/minimist/test/dotted.js","e03ea33b7cfbb7799a90b5b7a799d253"],["node_modules/mkdirp/node_modules/minimist/test/long.js","652e865e69ae41e78d9ad95f8557f0a2"],["node_modules/mkdirp/node_modules/minimist/test/parse.js","02125d8ef8b795946d6e238b880d0814"],["node_modules/mkdirp/node_modules/minimist/test/parse_modified.js","076418970e9e56b926ded3e24aee7a01"],["node_modules/mkdirp/node_modules/minimist/test/short.js","a964fe2c657d6e71d1c3a2c8bc5ce79c"],["node_modules/mkdirp/node_modules/minimist/test/whitespace.js","caa1c589b42a96804176247191ccb980"],["node_modules/mkdirp/package.json","b6aab767d50d4ea5cda26e279d207539"],["node_modules/mkdirp/readme.markdown","fb5087d2309c829567a18b77d43fbea5"],["node_modules/mkdirp/test/chmod.js","0dc717d70d0a5c203d4445b254828170"],["node_modules/mkdirp/test/clobber.js","b58e37e5922e9d03cd4b4e383ec8acd2"],["node_modules/mkdirp/test/mkdirp.js","568448d36da55ea890923d483f082fbc"],["node_modules/mkdirp/test/opts_fs.js","012858e2d9fd5ad9bad79d0b780f3a46"],["node_modules/mkdirp/test/opts_fs_sync.js","0811db9973a3fe26d9fe2b6f550ae374"],["node_modules/mkdirp/test/perm.js","40f49b41cbcae7105729d7f892e229a8"],["node_modules/mkdirp/test/perm_sync.js","63faf9288fc73b378510149a3a2120a4"],["node_modules/mkdirp/test/race.js","ea03e8320bfdf179a4d589e73f3ac302"],["node_modules/mkdirp/test/rel.js","ee4926533441d5574469ed8afc9b2d21"],["node_modules/mkdirp/test/return.js","ac2c9466636f391c17c6994ea8a51338"],["node_modules/mkdirp/test/return_sync.js","9ab72a21fa3e974dd6e50ab25c0f697e"],["node_modules/mkdirp/test/root.js","1d8aad344388793f4ba1a2b68fc1e130"],["node_modules/mkdirp/test/sync.js","0ce9d0bf0203775fd4073b4d436920b5"],["node_modules/mkdirp/test/umask.js","ce0030869a33d36268e36e27e6f04e2e"],["node_modules/mkdirp/test/umask_sync.js","aaf976f897e44397d06242d36f3821e3"],["node_modules/normalize-package-data/README.md","a25bd698e2d5d0032a9daf1ae65329d8"],["node_modules/normalize-package-data/lib/extract_description.js","5c523c4ab369586f32d49c6caed99c2e"],["node_modules/normalize-package-data/lib/fixer.js","b59ea4f818b5b4dc62257c156c981001"],["node_modules/normalize-package-data/lib/make_warning.js","3b87184568b3ba806d38233c904ac250"],["node_modules/normalize-package-data/lib/normalize.js","d7c8d95c23842d8eda85fa2ff5ff5e7d"],["node_modules/normalize-package-data/lib/safe_format.js","7d5529faadfd4a28c0d3064d404e902e"],["node_modules/normalize-package-data/lib/typos.json","8598638c133c563f5322eba9c17be4fc"],["node_modules/normalize-package-data/lib/warning_messages.json","69c18ec227b06690f1f7175432a0d8ac"],["node_modules/normalize-package-data/package.json","593b3a6b038c8beed30713aebeafac43"],["node_modules/number-is-nan/index.js","8d047de69c33e1bebc91b6b113124f4b"],["node_modules/number-is-nan/package.json","75ec24ea24415fc9a0aca3e16c4b8762"],["node_modules/number-is-nan/readme.md","b5ae3f0dbb89c50a084aa9812777f712"],["node_modules/object-assign/index.js","4eb3c1a156ce2effd67b37a2dfedc632"],["node_modules/object-assign/package.json","dc16b0b03ae37c5a804bb9e220aafee2"],["node_modules/object-assign/readme.md","dfa47f4fb28896ff0b929f4e7dac3705"],["node_modules/once/README.md","58f1e04252b1477aacd25268d88d5d50"],["node_modules/once/once.js","d1d6962324348ad89bf780a233952c61"],["node_modules/once/package.json","7cdfef826dc2234ef652a8be3cfd3931"],["node_modules/parse-json/index.js","dd63e2a84ff455d36be56cbeafd79c70"],["node_modules/parse-json/package.json","e9d19dfc0e45a8a5846d7a0c8e97aa39"],["node_modules/parse-json/readme.md","a31d173dd9a021737afdc955aeab49d7"],["node_modules/parse-json/vendor/parse.js","567dcd8a04b7e0506a7a945285a711df"],["node_modules/parse-json/vendor/unicode.js","fe199b3c69703e7b7468b8cd01b68052"],["node_modules/path-exists/index.js","22728ba7b6566e930e7c96d80c8a7d9a"],["node_modules/path-exists/package.json","f267d1cc6ac6444002b302a2aaf57aff"],["node_modules/path-exists/readme.md","d62c92c69e0de8cacf22661c70e88354"],["node_modules/path-is-absolute/index.js","135a9dc74dc76b698c2abeaaa165f889"],["node_modules/path-is-absolute/package.json","5d346d778e416516e0b6cb7d8aeb7f32"],["node_modules/path-is-absolute/readme.md","77dcaf91010aea98f54e727c5c34a297"],["node_modules/path-to-regexp/History.md","3a5e4a10d63d6ab976612d3697ea295f"],["node_modules/path-to-regexp/Readme.md","611b080406aa74cb00020b81a6c780fa"],["node_modules/path-to-regexp/index.d.ts","d8f620aa061671976f54d03d930314bf"],["node_modules/path-to-regexp/index.js","07e02f8b037e4653c60d978136a54670"],["node_modules/path-to-regexp/package.json","4428da211d8aeaeaf247114383a19b23"],["node_modules/path-type/index.js","476274d39c1908aa028e5e12797cd010"],["node_modules/path-type/package.json","d4882ff706025ae37ff3bd3be2931604"],["node_modules/path-type/readme.md","96c45a09c84a290eafca38434057ef2c"],["node_modules/pify/index.js","d3aa656ec8bdc1a98d648d1ceebb9267"],["node_modules/pify/package.json","a45bdd0071044745a32814eaa498ae4e"],["node_modules/pify/readme.md","f9471563ef6dd27f1d4df6b6aa28a21b"],["node_modules/pinkie-promise/index.js","6ad58f1f9e09b5d24f1c002f0c591030"],["node_modules/pinkie-promise/package.json","1913d7d524e32b5f58f7820d5448ac0c"],["node_modules/pinkie-promise/readme.md","f42f5e165147cb487eee1d73bd9fca4e"],["node_modules/pinkie/index.js","ea130eba60f416a698c21d01b2ee5067"],["node_modules/pinkie/package.json","67c94a4cb687bca33ec6ab0be7bbbcc5"],["node_modules/pinkie/readme.md","46b3ebc6617f8f45e28cb3bb4b2b1646"],["node_modules/pretty-bytes/index.js","e2c01160f0767eb2f6b919e26084e583"],["node_modules/pretty-bytes/package.json","fbdaa8c6a20685a39d05369ccc2078b9"],["node_modules/pretty-bytes/readme.md","549f0f3c650339d2741f2e0b52fc80f5"],["node_modules/read-pkg-up/index.js","22fe3248b00dc24bd50d9e9bd2aa881f"],["node_modules/read-pkg-up/package.json","b3d7cb0fa9e6f60cfef3595bf0f6fcde"],["node_modules/read-pkg-up/readme.md","73be48cd22894fd48790cdbf61496a1e"],["node_modules/read-pkg/index.js","6c4d8c6fdb256d7d4cdd4c8fa4586853"],["node_modules/read-pkg/package.json","3279112bec0a19b6e74c7550148d39ec"],["node_modules/read-pkg/readme.md","95dc25f6abd054344df752eae84aace5"],["node_modules/redent/index.js","652b88d0e4684ccc2c9412e222112f32"],["node_modules/redent/package.json","0c8821560d4c415a9eaf5562ca575bca"],["node_modules/redent/readme.md","3f05080d4138c3c2fdb7e17247afb01c"],["node_modules/repeating/index.js","e8c65ca553cf8d0a82c3da44a6cd377c"],["node_modules/repeating/package.json","945eeae4cf9816c55a483e8842cce77d"],["node_modules/repeating/readme.md","93b7505400853eb3a9766942be74f559"],["node_modules/semver/README.md","cf0b09331f7ec2191c380f09e0ffc957"],["node_modules/semver/package.json","c71ea8ebe34f08c33e2e1e2299bb9889"],["node_modules/semver/range.bnf","b54e62147bf496590215391ac37153a3"],["node_modules/semver/semver.js","a5a96794f4b1221ecbd06bb54318e9d5"],["node_modules/serviceworker-cache-polyfill/README.md","1bbf2a7bf3775222176bdd534865152d"],["node_modules/serviceworker-cache-polyfill/index.js","3e07c94b20c469bfb10856ebe3abf9e4"],["node_modules/serviceworker-cache-polyfill/package.json","99e60a3c7e8ab7a2328b72c0dbe5a280"],["node_modules/signal-exit/CHANGELOG.md","92c08b8901d62b4d61042f05f25bce11"],["node_modules/signal-exit/LICENSE.txt","e29e20260a1c78dba16a233048565cde"],["node_modules/signal-exit/README.md","7ce1c2bb98642b68f14b4cd04ee712c4"],["node_modules/signal-exit/index.js","a2b431d1c9a84363966d8c76143b87ba"],["node_modules/signal-exit/package.json","36e991d357b4ace26596bc6459191882"],["node_modules/signal-exit/signals.js","088797b13dce89e566484933fe8538b7"],["node_modules/spdx-correct/README.md","efd757bb0993fc9c9dc91ea802823ce1"],["node_modules/spdx-correct/index.js","655a50d011bc7f6b8139e8560bf47e0b"],["node_modules/spdx-correct/package.json","858b759a1abce6fe904790565eec5b2c"],["node_modules/spdx-expression-parse/README.md","2c996b4d6cb281e19134d89a58fb5e11"],["node_modules/spdx-expression-parse/index.js","0ed57f742c6d7264cf06eee4f7c71e3c"],["node_modules/spdx-expression-parse/package.json","380a416bc02f1b6afccf189076420366"],["node_modules/spdx-expression-parse/parser.js","ec18bac614dd3a947a7dd05027b108fe"],["node_modules/spdx-license-ids/README.md","7bc6c8967a46878864030be2ed07f32c"],["node_modules/spdx-license-ids/package.json","f56a2d43ccfe7ccafbeacc9a5d2226f6"],["node_modules/spdx-license-ids/spdx-license-ids.json","34af712b0ca5a258cf12f8d705366856"],["node_modules/strip-bom/index.js","1310cd8a86ac52095ca8d47104385e94"],["node_modules/strip-bom/package.json","e84f54666795efe5743fd3a4c8af39c6"],["node_modules/strip-bom/readme.md","5028bec06ab579956688a189d0771904"],["node_modules/strip-indent/cli.js","d31478d4f45669ff6d825580ba43d641"],["node_modules/strip-indent/index.js","8999280439e398ef1c50e4a108d115c2"],["node_modules/strip-indent/package.json","897ead5de4a900118f9ae496e4055df1"],["node_modules/strip-indent/readme.md","ea4eb6df64580359682740ece6ed95c4"],["node_modules/sw-precache/README.md","dee727c3cd07db4a89d2b4d65cc75daf"],["node_modules/sw-precache/cli.js","c3f936752da3911eba54e8f6675a90df"],["node_modules/sw-precache/lib/functions.js","c7e3daab54c4221c4830d416e8083e3b"],["node_modules/sw-precache/lib/sw-precache.js","b91f4494742b7ad37a7a0e343969d6b7"],["node_modules/sw-precache/package.json","e26c4962b12b5aa858f407843f8b1bc6"],["node_modules/sw-precache/service-worker.tmpl","57fa24386b86b5163dd43eb7380ebdf6"],["node_modules/sw-toolbox/README.md","6fab438c0856b91b5ffc1937dbef876b"],["node_modules/sw-toolbox/companion.js","6c891a25790dfafb6041bca5dfefdc77"],["node_modules/sw-toolbox/index.d.ts","b5eb93f97427d7a73d068ad45b16de72"],["node_modules/sw-toolbox/lib/helpers.js","0cd89bf34cad65cf397c4df3ff30b952"],["node_modules/sw-toolbox/lib/idb-cache-expiration.js","04f87dddabf177b5777858d3bf93d519"],["node_modules/sw-toolbox/lib/listeners.js","96239c6ebbb63eb48afe209b47045995"],["node_modules/sw-toolbox/lib/options.js","1596f89daa97e175201ede34194e6e2d"],["node_modules/sw-toolbox/lib/route.js","28eb00fa3f0629f29a57cbadadb5b62e"],["node_modules/sw-toolbox/lib/router.js","bb5d878875b767dee0247e36dcabbd55"],["node_modules/sw-toolbox/lib/strategies/cacheFirst.js","98df7d0a73a09bbee8d1b94cb74a99d9"],["node_modules/sw-toolbox/lib/strategies/cacheOnly.js","ac0098e43f27253af0d19ffb0a1e8bf7"],["node_modules/sw-toolbox/lib/strategies/fastest.js","ee5f548d4b0a6740d0f58841147f289b"],["node_modules/sw-toolbox/lib/strategies/index.js","ae726b3e8a480ff20080d9525a87d4af"],["node_modules/sw-toolbox/lib/strategies/networkFirst.js","1eeb34efa5138e0ac610d6fbe32a10aa"],["node_modules/sw-toolbox/lib/strategies/networkOnly.js","d3981eb3d4f75bc428b567a39646d54d"],["node_modules/sw-toolbox/lib/sw-toolbox.js","d7ce34e1f90a0506bb11acd591b29b2d"],["node_modules/sw-toolbox/package.json","321df3f276f2c4a3085f8e7eba230c25"],["node_modules/sw-toolbox/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["node_modules/sw-toolbox/sw-toolbox.js.map","ddac38b51c28fdc819adb2495eb6a3ff"],["node_modules/trim-newlines/index.js","668e166c032aae23e0bc43cd81340c6d"],["node_modules/trim-newlines/package.json","3f6729d500819943f02e427e719eb6bd"],["node_modules/trim-newlines/readme.md","02deadce9e4a8c281e94996caeefcbcf"],["node_modules/urijs/CHANGELOG.md","3072722425a47414bd71cb3ea90342aa"],["node_modules/urijs/LICENSE.txt","208faacdc29d1dbd0fdbe20fbfcf7949"],["node_modules/urijs/README.md","82c96cbde7b695922d409129e2555f51"],["node_modules/urijs/package.json","be6816f51acd9c10569cd49ac7dd9b64"],["node_modules/urijs/src/IPv6.js","c84db3821f98112b47499133f2b3246f"],["node_modules/urijs/src/SecondLevelDomains.js","c3244e786d5f6adc0602fe5e73e1cb34"],["node_modules/urijs/src/URI.fragmentQuery.js","16e0e40673fd76af3228c5d5f86dfc73"],["node_modules/urijs/src/URI.fragmentURI.js","faf82073d0133c69cba0f4d6ea8f4f33"],["node_modules/urijs/src/URI.js","b912a082590c6d6f27a1ed3c7f5456d5"],["node_modules/urijs/src/URI.min.js","e7add44f293b98672b53af284e7233fa"],["node_modules/urijs/src/URITemplate.js","90fccbe5338c069603cd2785297cef77"],["node_modules/urijs/src/jquery.URI.js","d24d311ed1618412da948ca7b6e6ca02"],["node_modules/urijs/src/jquery.URI.min.js","bfe882fdcef936b66c4d31762284db08"],["node_modules/urijs/src/punycode.js","3d05e1a0418c33aca6852f201a13ae88"],["node_modules/validate-npm-package-license/README.md","ba9681f6c3438dbc91ba1d8a47c2cbd6"],["node_modules/validate-npm-package-license/index.js","32796556252ac851bbfc133b01179b00"],["node_modules/validate-npm-package-license/package.json","1770cfc6216adc272feb78b2cb02d6c4"],["node_modules/wrappy/README.md","55b4b44807d7edaf6084e42a5ae078d6"],["node_modules/wrappy/package.json","a45b11ced26739c9276808dce4a0723e"],["node_modules/wrappy/wrappy.js","04a65e1669dc90fa11c900693c1974b1"],["package.json","18608c7eabd3737b953d6175d03ec484"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-sw-precache-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




