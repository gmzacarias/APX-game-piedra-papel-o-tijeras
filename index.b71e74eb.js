// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
var _button = require("../src/components/button");
var _stone = require("../src/components/stone");
var _paper = require("../src/components/paper");
var _scissor = require("../src/components/scissor");
(function() {
    const root = document.querySelector(".root");
    (0, _router.initRouter)(root);
})();

},{"./router":"4QFWt","../src/components/button":"dZaQH","../src/components/stone":"cQjzC","../src/components/paper":"bE1qX","../src/components/scissor":"cwO4E"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _index = require("../src/pages/index-game/index");
var _rules = require("../src/pages/rules-game/rules");
var _game = require("../src/pages/game/game");
var _score = require("../src/pages/score-game/score");
const BASE_PATH = "/APX-game-piedra-papel-o-tijeras";
function isGithubPages() {
    console.log(location.host.includes("gmzacarias.github.io"));
    return location.host.includes("gmzacarias.github.io");
}
const routes = [
    {
        path: /\/welcomegame/,
        component: (0, _index.initIndexGamePage)
    },
    {
        path: /\/rulesgame/,
        component: (0, _rules.initRulesGamePage)
    },
    {
        path: /\/startgame/,
        component: (0, _game.initGamePage)
    },
    {
        path: /\/scoregame/,
        component: (0, _score.initScoreGamePage)
    }
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        console.log("NewRoute: ", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        console.log("NewRoute: ", newRoute);
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            while(container.firstChild)container.removeChild(container.firstChild);
            container.appendChild(el);
        }
    }
    location.pathname;
    goTo("/welcomegame");
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
}

},{"../src/pages/index-game/index":"38QQR","../src/pages/rules-game/rules":"itVc4","../src/pages/game/game":"bd5wf","../src/pages/score-game/score":"3a11L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38QQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initIndexGamePage", ()=>initIndexGamePage);
const imageHome = require("url:../../../src/assets/images/welcome-game.svg");
function initIndexGamePage(params) {
    // Div
    const div = document.createElement("div");
    div.classList.add("div-container");
    div.innerHTML = `
        <img src="${imageHome}" class="img-welcome">
            <button-component class="button-component">¡jugar!</button-component>
              `;
    // Style
    const style = document.createElement("style");
    style.innerHTML = `
        .div-container{
        width: 100%;
		    height: 100%;
		    padding: 100px;
		    display: flex;
		    flex-direction: column;
		    justify-content:center;
        align-items:center;
        gap:50px;
      }

        .img-welcome{
            width:284px;
            height:211px
        }

    `;
    // Button component
    const buttonComp = div.querySelector(".button-component");
    buttonComp?.addEventListener("click", ()=>{
        params.goTo("/stone-paper-scissors/rulesgame");
    });
    div.appendChild(style);
    return div;
}

},{"url:../../../src/assets/images/welcome-game.svg":"8iAjV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iAjV":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "welcome-game.9f60fed2.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"itVc4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRulesGamePage", ()=>initRulesGamePage);
var _state = require("../../state");
const imageRules = require("url:../../../src/assets/images/rules-game.svg");
(0, _state.state).getLocalStorage();
function initRulesGamePage(params) {
    //Div
    const div = document.createElement("div");
    div.classList.add("div-container");
    div.innerHTML = `
          <img src="${imageRules}" class="img-rules">
          <button-component class="button-component">¡jugar!</button-component>
        `;
    // Style
    const style = document.createElement("style");
    style.innerHTML = `
    .div-container{
      width: 100%;
      height: 100%;
      padding: 100px;
      gap:50px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
      }
     
      .img-rules {
        width:320px;  
        height: 240px;
      }`;
    // Button component
    const buttonComp = div.querySelector(".button-component");
    buttonComp?.addEventListener("click", ()=>{
        params.goTo("/stone-paper-scissors/startgame");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","url:../../../src/assets/images/rules-game.svg":"b2mjA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            computerPlay: ""
        },
        history: {
            myScore: 0,
            computerScore: 0
        }
    },
    getLocalStorage () {
        const localStorageData = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) this.data.history = localStorageData;
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
    },
    setMove (movement) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = movement;
        const machineMovement = ()=>{
            const move = [
                "Piedra",
                "Papel",
                "Tijera"
            ];
            return move[Math.floor(Math.random() * 3)];
        };
        currentState.currentGame.computerPlay = machineMovement();
        this.setHistory();
    },
    whoisWinner () {
        const currentState = this.getState();
        const playedGame = currentState.currentGame;
        const equality = [
            playedGame.myPlay == "Piedra" && playedGame.computerPlay == "Piedra",
            playedGame.myPlay == "Papel" && playedGame.computerPlay == "Papel",
            playedGame.myPlay == "Tijera" && playedGame.computerPlay == "Tijera", 
        ];
        if (equality.includes(true)) return "Empate";
        const winnerGame = [
            playedGame.myPlay == "Tijera" && playedGame.computerPlay == "Papel",
            playedGame.myPlay == "Piedra" && playedGame.computerPlay == "Tijera",
            playedGame.myPlay == "Papel" && playedGame.computerPlay == "Piedra", 
        ];
        if (winnerGame.includes(true)) return "Ganaste";
        else return "Perdiste";
    },
    setHistory () {
        const currentState = this.getState();
        const currentWhoWins = this.whoisWinner();
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;
        if (currentWhoWins == "Ganaste") this.setState({
            ...currentState,
            history: {
                myScore: myScore + 1,
                computerScore: computerScore
            }
        });
        if (currentWhoWins == "Perdiste") this.setState({
            ...currentState,
            history: {
                myScore: myScore,
                computerScore: computerScore + 1
            }
        });
        this.savedData();
    },
    savedData () {
        const currentState = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentState));
    },
    cleanData () {
        localStorage.setItem("data", JSON.stringify({
            myScore: 0,
            computerScore: 0
        }));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2mjA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "rules-game.36d76d68.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bd5wf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage) // import { state } from "../../state";
 // export function initGamePage(params) {
 //     const div = document.createElement("div");
 //     div.classList.add("game-page");
 //     const style = document.createElement("style");
 //     let counter = 3;
 //     const intervalGame = setInterval(() => {
 //         counter--;
 //         const counterEl = div.querySelector(".counter-el")as Element;
 //         counterEl.textContent = String(counter);
 //         if (counter < 0) {
 //             clearInterval(intervalGame);
 //             params.goTo("/stone-paper-scissors/rulesgame");
 //         }
 //     }, 1000);
 //     div.innerHTML =
 //         `
 // <div class="counter-el">${counter}</div>
 //  <div class="played-machine-cont">
 //  <play-stone class="stone-hand-machine hand-disabled"></play-stone>
 //  <play-paper class="paper-hand-machine hand-disabled"></play-paper>
 //  <play-scissor class="scissor-hand-machine hand-disabled"></play-scissor>
 //  </div>
 //  <div class="my-hand">
 //  <play-stone class="stone-hand"></play-stone>
 //  <play-paper class="paper-hand"></play-paper>
 //  <play-scissor class="scissor-hand"></play-scissor>
 //  </div>
 //  `
 //  style.innerHTML =
 //  `
 //     .game-Page{
 //         width:100%;
 //         height: 100vh;
 //         display: flex;
 //         flex-direction: column;
 //         justify-content: space-between;
 //         align-items: center;
 //         gap:20px
 //     }
 //     .my-play {
 //         width: 100%;
 //         display: flex;
 //         justify-content: space-evenly;
 //     }
 //     .active-hands{
 //         height: 157px;
 //     }
 //     .counter-el {
 //         text-align:center;
 //         font-family: var(--font-button);
 //         font-weight: bold;
 //         font-size: 100px;
 //         color: #292728;
 //     }
 //     .actived {
 //         display: inherit;
 //         transform: translateY(-30px);
 //         transition: all 0.5s;
 //     }
 //     .disabled {
 //         opacity: 60%;
 //         transform: translateY(30px);
 //         transition: 0.5s;
 //     }
 //     .played-machine-cont {
 //         display: none;
 //     }
 //     .actived-hands-machine {
 //         width: 100%;
 //         height: 157px;
 //         display: flex;
 //         justify-content: center;
 //         transform: rotate(180deg);
 //     }
 //     .hand-disabled{
 //         display: none;
 //     }
 //     .actived-hand-machine {
 //         display: flex;
 //         transform: translateY(-30px);
 //         transition: all 0.5s;
 //     }
 //     `
 //     const countdownGame = div.querySelector(".counter-el") as Element;
 //     const myPlayCont = div.querySelector<any>(".my-play").children;
 //     const myPlayDiv = div.querySelector(".my-play") as Element;
 //     const yourMoveStone = div.querySelector(".stone-hand") as Element;
 //     const yourMovePaper = div.querySelector(".paper-hand") as Element;
 //     const yourMoveScissor = div.querySelector(".scissor-hand") as Element;
 //     const machineMoveCont = div.querySelector(".played-machine-cont") as Element;
 //     const machineStone = div.querySelector(".stone-hand-machine") as Element;
 //     const machinePaper = div.querySelector(".paper-hand-machine") as Element;
 //     const machineScissor = div.querySelector(".scissor-hand-machine") as Element;
 //     for (const hands of myPlayCont) {
 //         hands.addEventListener("click", () => {
 //             const type = hands.getAttribute("class");
 //             clearInterval(intervalGame);
 //             if (type == "stone-hand") {
 //                 state.setMove("Piedra");
 //                 activeHands("Piedra");
 //             } else if (type == "paper-hand") {
 //                 state.setMove("Papel");
 //                 activeHands("Papel");
 //             } else if (type == "scissor-hand") {
 //                 state.setMove("Tijera");
 //                 activeHands("Tijera");
 //             }
 //         });
 //     }
 //     function activeHands(param) {
 //         for (const hand of myPlayCont) {
 //             hand.classList.add("disabled");
 //         }
 //         if (param == "Piedra") {
 //             yourMoveStone.classList.remove("disabled");
 //             yourMoveStone.classList.add("actived");
 //             setTimeout(() => {
 //                 yourMovePaper.classList.add("hand-disabled");
 //                 yourMoveScissor.classList.add("hand-disabled");
 //             }, 1500);
 //         }
 //         if (param == "Papel") {
 //             yourMovePaper.classList.remove("disabled");
 //             yourMovePaper.classList.add("actived");
 //             setTimeout(() => {
 //                 yourMoveStone.classList.add("hand-disabled");
 //                 yourMoveScissor.classList.add("hand-disabled");
 //             }, 1500);
 //         }
 //         if (param == "Tijera") {
 //             yourMoveScissor.classList.remove("disabled");
 //             yourMoveScissor.classList.add("actived");
 //             setTimeout(() => {
 //                 yourMoveStone.classList.add("hand-disabled");
 //                 yourMovePaper.classList.add("hand-disabled");
 //             }, 1500);
 //         }
 //     }
 //     setTimeout(() => {
 //         const statePlayedMachine = state.getState().currentGame.computerPlay;
 //         countdownGame.remove();
 //         myPlayDiv.classList.add("active-hands");
 //         machineMoveCont.classList.add("actived-hands-machine");
 //         if (statePlayedMachine == "Piedra") {
 //             machineStone.classList.add("actived-hand-machine");
 //         }
 //         if (statePlayedMachine == "Papel") {
 //             machinePaper.classList.add("actived-hand-machine");
 //         }
 //         if (statePlayedMachine == "Tijera") {
 //             machineScissor.classList.add("actived-hand-machine");
 //         }
 //         setTimeout(() => {
 //             params.goTo("/stone-paper-scissors/scoregame");
 //         }, 1500);
 //     }, 1500);
 //     div.appendChild(style);
 //     return div;
 // }
;
var _state = require("../../state");
function initGamePage(params) {
    const div = document.createElement("div");
    div.classList.add("game-page");
    const style = document.createElement("style");
    let counter = 3;
    const countdown = setInterval(()=>{
        counter--;
        const counterEl = div.querySelector(".counter-el");
        counterEl.textContent = String(counter);
        if (counter < 0) {
            clearInterval(countdown);
            params.goTo("/stone-paper-scissors/rulesgame");
        }
    }, 1000);
    div.innerHTML = `
    <div class="counter-el">${counter}</div>
    <div class="hands-machine">
    <stone-component class="stone-hand-pc hand-display-disabled"></stone-component>
    <paper-component class="paper-hand-pc hand-display-disabled"></paper-component>
    <scissor-component class="scissor-hand-pc hand-display-disabled"></scissor-component>
    </div>
    <div class="my-hands">
    <stone-component class="stone-hand"></stone-component>
    <paper-component class="paper-hand"></paper-component>
    <scissor-component class="scissor-hand"></scissor-component>
    </div>
    `;
    style.innerHTML = `
	  .game-page {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .my-hands {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    .active-hands{
      height: 157px;
    }
    .counter-el {
      margin-top:150px;
      text-align:center;
      font-weight: bold;
      font-size: 200px;
      font-family: var(--font-button);
    }
    .actived {
      display: inherit;
      transform: translateY(-30px);
      transition: all 0.5s;
    }
    .disabled {
      opacity: 80%;
      transform: translateY(30px);
      transition: 0.5s;
    }
    .hands-machine {
      display: none;
    }
    .actived-hands-machine {
      width: 100%;
      height: 157px;
      display: flex;
      justify-content: center;
      transform: rotate(180deg);
    }
    .hand-display-disabled{
        display: none;
    }
    .enabled-hand-machine {
      display: flex;
      transform: translateY(-30px);
      transition: all 0.5s;
    }`;
    const countdownEl = div.querySelector(".counter-el");
    const myHandsCont = div.querySelector(".my-hands").children;
    const myHandsDiv = div.querySelector(".my-hands");
    const handScissor = div.querySelector(".scissor-hand");
    const handStone = div.querySelector(".stone-hand");
    const handPaper = div.querySelector(".paper-hand");
    const handsMachine = div.querySelector(".hands-machine");
    const handMachineStone = div.querySelector(".stone-hand-pc");
    const handMachinePaper = div.querySelector(".paper-hand-pc");
    const handMachineScissor = div.querySelector(".scissor-hand-pc");
    for (const hands of myHandsCont)hands.addEventListener("click", ()=>{
        const type = hands.getAttribute("class");
        clearInterval(countdown);
        if (type == "stone-hand") {
            (0, _state.state).setMove("Piedra");
            activeHands("Piedra");
        } else if (type == "paper-hand") {
            (0, _state.state).setMove("Papel");
            activeHands("Papel");
        } else if (type == "scissor-hand") {
            (0, _state.state).setMove("Tijera");
            activeHands("Tijera");
        }
    });
    function activeHands(param) {
        for (const hand of myHandsCont)hand.classList.add("disabled");
        if (param == "Piedra") {
            handStone.classList.remove("disabled");
            handStone.classList.add("actived");
            setTimeout(()=>{
                handScissor.classList.add("hand-display-disabled");
                handPaper.classList.add("hand-display-disabled");
            }, 1500);
        }
        if (param == "Papel") {
            handPaper.classList.remove("disabled");
            handPaper.classList.add("actived");
            setTimeout(()=>{
                handScissor.classList.add("hand-display-disabled");
                handStone.classList.add("hand-display-disabled");
            }, 1500);
        }
        if (param == "Tijera") {
            handScissor.classList.remove("disabled");
            handScissor.classList.add("actived");
            setTimeout(()=>{
                handStone.classList.add("hand-display-disabled");
                handPaper.classList.add("hand-display-disabled");
            }, 1500);
        }
        setTimeout(()=>{
            const stateMachine = (0, _state.state).getState().currentGame.computerPlay;
            countdownEl.remove();
            myHandsDiv.classList.add("active-hands");
            handsMachine.classList.add("actived-hands-machine");
            if (stateMachine == "Piedra") handMachineStone.classList.add("enabled-hand-machine");
            if (stateMachine == "Papel") handMachinePaper.classList.add("enabled-hand-machine");
            if (stateMachine == "Tijera") handMachineScissor.classList.add("enabled-hand-machine");
            setTimeout(()=>{
                params.goTo("/stone-paper-scissors/scoregame");
            }, 1500);
        }, 1500);
    }
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3a11L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScoreGamePage", ()=>initScoreGamePage);
var _state = require("../../state");
const resultImages = {
    defeatedGame: require("url:../../../src/assets/images/defeat-game.svg"),
    tieGame: require("url:../../../src/assets/images/tie-game.svg"),
    victoryGame: require("url:../../../src/assets/images/victory-game.svg")
};
function initScoreGamePage(params) {
    const div = document.createElement("div");
    div.className = "result-cont";
    div.classList.add("score-page");
    const resultsGame = (0, _state.state).whoisWinner();
    const styleBackground = document.createElement("style");
    let imgOfResults;
    if (resultsGame == "Ganaste") {
        imgOfResults = resultImages.victoryGame;
        styleBackground.innerHTML = `
		.result-cont {
			background:var(--background-victory);  
		}`;
    } else if (resultsGame == "Perdiste") {
        imgOfResults = resultImages.defeatedGame;
        styleBackground.innerHTML = `
		.result-cont {
			background:var(--background-defeated);  
		}`;
    }
    if (resultsGame == "Empate") {
        imgOfResults = resultImages.tieGame;
        styleBackground.innerHTML = `
		.result-cont {
			background:var(--background-tie);   
		}`;
    }
    const currentState = (0, _state.state).getState();
    div.innerHTML = `
	  <img src="${imgOfResults}" class="result-game-img" >
	  <div class="container-score">
      <h2>Score</h2>
      <p class="you-score">Vos: ${currentState.history.myScore}</p>
      <p class="machine-score">Máquina: ${currentState.history.computerScore}</p>
    </div>
	  <button-component class="button-back">Volver a jugar</button-component>
	  <button-component class="button-reset">Reiniciar puntajes</button-component>
    `;
    const buttonBack = div.querySelector(".button-back");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/stone-paper-scissors/startgame");
    });
    const buttonReset = div.querySelector(".button-reset");
    buttonReset.addEventListener("click", ()=>{
        (0, _state.state).cleanData();
        (0, _state.state).getLocalStorage();
        params.goTo("/stone-paper-scissors/rulesgame");
    });
    const style = document.createElement("style");
    style.innerHTML = `
  .score-page {
    width: 100%;
    height: 100%;
    padding: 50px 0 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap:20px;
  }
  .result-game-img {
    width: 250px;
    height:220px;
  }
  .container-score {
    background: #ffffff;
    width: 259px;
    border: 10px solid #000000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-family: var(--font-button);
  }
  .container-score > h2 {
    margin: 0 auto;
    font-size: 55px;
  }
  .container-score > p {
    margin: 0 10px 5px 0;
    font-size: 45px;
    text-align: end;
  }
  `;
    div.appendChild(styleBackground);
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","url:../../../src/assets/images/defeat-game.svg":"ixC0b","url:../../../src/assets/images/tie-game.svg":"bv1Y6","url:../../../src/assets/images/victory-game.svg":"3D33u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixC0b":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "defeat-game.a6c21fda.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bv1Y6":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tie-game.044ab999.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3D33u":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "victory-game.03f80ccc.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dZaQH":[function(require,module,exports) {
customElements.define("button-component", class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "button-component";
        style.innerHTML = `
                  .button-component {
                    background: #006CFC;
                    border: 10px solid #001997;
                    border-radius: 10px;
                    width: 322px;
                    height: 87px;
                    text-align: center;
                    font-family: var(--font-button);
                    font-size: 45px;
                    color: #ffffff;
                    box-sizing: border-box;
                  }
                  `;
        button.textContent = this.textContent;
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}],"cQjzC":[function(require,module,exports) {
const imageStone = require("url:../../assets/images/stone-hand.svg");
customElements.define("stone-component", class Stone extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
        <img src="${imageStone}" class="stone-hand" >
        `;
        style.innerHTML = `
            .stone-hand {
              width: 103px;
              height: 236px;
            }
            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../assets/images/stone-hand.svg":"Y1FtO"}],"Y1FtO":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "stone-hand.fefb2137.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bE1qX":[function(require,module,exports) {
const imagePaper = require("url:../../assets/images/paper-hand.svg");
customElements.define("paper-component", class Paper extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
        <img src="${imagePaper}" class="paper-hand" >
        `;
        style.innerHTML = `
            .paper-hand {
              width: 122px;
              height: 236px;
            }
            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../assets/images/paper-hand.svg":"dS0cd"}],"dS0cd":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "paper-hand.5d8a846f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cwO4E":[function(require,module,exports) {
const imageScissor = require("url:../../assets/images/scissor-hand.svg");
customElements.define("scissor-component", class Scissor extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
        <img src="${imageScissor}" class="scissor-hand" >
        `;
        style.innerHTML = `
            .scissor-hand {
              width: 103px;
              height: 236px;
              
            }
            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../assets/images/scissor-hand.svg":"glbvx"}],"glbvx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "scissor-hand.dc0b8013.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire555a")

//# sourceMappingURL=index.b71e74eb.js.map
