// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
var _button = require("../src/components/button");
var _stone = require("../src/components/stone");
var _paper = require("../src/components/paper");
var _scissor = require("../src/components/scissor");
(function() {
    const root = document.querySelector(".root");
    _router.initRouter(root);
})();

},{"./router":"b2iia","../src/components/button":"3uBrB","../src/components/stone":"ac3Pw","../src/components/paper":"fDMTg","../src/components/scissor":"dYGFK"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _index = require("../src/pages/index-game/index");
var _rules = require("../src/pages/rules-game/rules");
var _game = require("../src/pages/game/game");
var _score = require("../src/pages/score-game/score");
const BASE_PATH = "/APX-game-piedra-papel-o-tijeras";
function isGithubPages() {
    console.log(location.host.includes("github.io"));
    return location.host.includes("github.io");
}
const routes = [
    {
        path: /\/welcomegame/,
        component: _index.initIndexGamePage
    },
    {
        path: /\/rulesgame/,
        component: _rules.initRulesGamePage
    },
    {
        path: /\/startgame/,
        component: _game.initGamePage
    },
    {
        path: /\/scoregame/,
        component: _score.initScoreGamePage
    }
];
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({
        }, "", completePath);
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
    if (location.pathname == "/") goTo("/welcomegame");
    else handleRoute(location.pathname);
    window.onpopstate = ()=>{
        handleRoute(location.pathname);
    };
}

},{"../src/pages/index-game/index":"gWB4B","../src/pages/rules-game/rules":"ewNlz","../src/pages/game/game":"gTQkq","../src/pages/score-game/score":"fU9NG","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gWB4B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initIndexGamePage", ()=>initIndexGamePage
);
const imageHome = require("url:../../../src/assets/images/welcome-game.svg");
function initIndexGamePage(params) {
    // Div
    const div = document.createElement("div");
    div.classList.add("div-container");
    div.innerHTML = `\n        <img src="${imageHome}" class="img-welcome">\n            <button-component class="button-component">¡jugar!</button-component>\n              `;
    // Style
    const style = document.createElement("style");
    style.innerHTML = `\n        .div-container{\n        width: 100%;\n		    height: 100%;\n		    padding: 100px;\n		    display: flex;\n		    flex-direction: column;\n		    justify-content:center;\n        align-items:center;\n        gap:50px;\n      }\n\n        .img-welcome{\n            width:284px;\n            height:211px\n        }\n\n    `;
    // Button component
    const buttonComp = div.querySelector(".button-component");
    buttonComp?.addEventListener("click", ()=>{
        params.goTo("/stone-paper-scissors/rulesgame");
    });
    div.appendChild(style);
    return div;
}

},{"url:../../../src/assets/images/welcome-game.svg":"8EQzf","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8EQzf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "welcome-game.558212dd.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
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
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"ewNlz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRulesGamePage", ()=>initRulesGamePage
);
var _state = require("../../state");
const imageRules = require("url:../../../src/assets/images/rules-game.svg");
_state.state.getLocalStorage();
function initRulesGamePage(params) {
    //Div
    const div = document.createElement("div");
    div.classList.add("div-container");
    div.innerHTML = `\n          <img src="${imageRules}" class="img-rules">\n          <button-component class="button-component">¡jugar!</button-component>\n        `;
    // Style
    const style = document.createElement("style");
    style.innerHTML = `\n    .div-container{\n      width: 100%;\n      height: 100%;\n      padding: 100px;\n      gap:50px;\n      display: flex;\n      flex-direction: column;\n      justify-content:center;\n      align-items:center;\n      }\n     \n      .img-rules {\n        width:320px;  \n        height: 240px;\n      }`;
    // Button component
    const buttonComp = div.querySelector(".button-component");
    buttonComp?.addEventListener("click", ()=>{
        params.goTo("/stone-paper-scissors/startgame");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","url:../../../src/assets/images/rules-game.svg":"14J8P","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"14J8P":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "rules-game.753f94c4.svg";

},{"./helpers/bundle-url":"8YnfL"}],"gTQkq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage
) // import { state } from "../../state";
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
    div.innerHTML = `\n    <div class="counter-el">${counter}</div>\n    <div class="hands-machine">\n    <stone-component class="stone-hand-pc hand-display-disabled"></stone-component>\n    <paper-component class="paper-hand-pc hand-display-disabled"></paper-component>\n    <scissor-component class="scissor-hand-pc hand-display-disabled"></scissor-component>\n    </div>\n    <div class="my-hands">\n    <stone-component class="stone-hand"></stone-component>\n    <paper-component class="paper-hand"></paper-component>\n    <scissor-component class="scissor-hand"></scissor-component>\n    </div>\n    `;
    style.innerHTML = `\n	  .game-page {\n      width: 100%;\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n    }\n    .my-hands {\n      width: 100%;\n      display: flex;\n      justify-content: space-evenly;\n    }\n    .active-hands{\n      height: 157px;\n    }\n    .counter-el {\n      margin-top:150px;\n      text-align:center;\n      font-weight: bold;\n      font-size: 200px;\n      font-family: var(--font-button);\n    }\n    .actived {\n      display: inherit;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    .disabled {\n      opacity: 80%;\n      transform: translateY(30px);\n      transition: 0.5s;\n    }\n    .hands-machine {\n      display: none;\n    }\n    .actived-hands-machine {\n      width: 100%;\n      height: 157px;\n      display: flex;\n      justify-content: center;\n      transform: rotate(180deg);\n    }\n    .hand-display-disabled{\n        display: none;\n    }\n    .enabled-hand-machine {\n      display: flex;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }`;
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
            _state.state.setMove("Piedra");
            activeHands("Piedra");
        } else if (type == "paper-hand") {
            _state.state.setMove("Papel");
            activeHands("Papel");
        } else if (type == "scissor-hand") {
            _state.state.setMove("Tijera");
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
            const stateMachine = _state.state.getState().currentGame.computerPlay;
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

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fU9NG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScoreGamePage", ()=>initScoreGamePage
);
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
    const resultsGame = _state.state.whoisWinner();
    const styleBackground = document.createElement("style");
    let imgOfResults;
    if (resultsGame == "Ganaste") {
        imgOfResults = resultImages.victoryGame;
        styleBackground.innerHTML = `\n		.result-cont {\n			background:var(--background-victory);  \n		}`;
    } else if (resultsGame == "Perdiste") {
        imgOfResults = resultImages.defeatedGame;
        styleBackground.innerHTML = `\n		.result-cont {\n			background:var(--background-defeated);  \n		}`;
    }
    if (resultsGame == "Empate") {
        imgOfResults = resultImages.tieGame;
        styleBackground.innerHTML = `\n		.result-cont {\n			background:var(--background-tie);   \n		}`;
    }
    const currentState = _state.state.getState();
    div.innerHTML = `\n	  <img src="${imgOfResults}" class="result-game-img" >\n	  <div class="container-score">\n      <h2>Score</h2>\n      <p class="you-score">Vos: ${currentState.history.myScore}</p>\n      <p class="machine-score">Máquina: ${currentState.history.computerScore}</p>\n    </div>\n	  <button-component class="button-back">Volver a jugar</button-component>\n	  <button-component class="button-reset">Reiniciar puntajes</button-component>\n    `;
    const buttonBack = div.querySelector(".button-back");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/stone-paper-scissors/startgame");
    });
    const buttonReset = div.querySelector(".button-reset");
    buttonReset.addEventListener("click", ()=>{
        _state.state.cleanData();
        _state.state.getLocalStorage();
        params.goTo("/stone-paper-scissors/rulesgame");
    });
    const style = document.createElement("style");
    style.innerHTML = `\n  .score-page {\n    width: 100%;\n    height: 100%;\n    padding: 50px 0 50px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    gap:20px;\n  }\n  .result-game-img {\n    width: 250px;\n    height:220px;\n  }\n  .container-score {\n    background: #ffffff;\n    width: 259px;\n    border: 10px solid #000000;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    font-family: var(--font-button);\n  }\n  .container-score > h2 {\n    margin: 0 auto;\n    font-size: 55px;\n  }\n  .container-score > p {\n    margin: 0 10px 5px 0;\n    font-size: 45px;\n    text-align: end;\n  }\n  `;
    div.appendChild(styleBackground);
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","url:../../../src/assets/images/defeat-game.svg":"jk8DB","url:../../../src/assets/images/tie-game.svg":"3Mqez","url:../../../src/assets/images/victory-game.svg":"cpQnk","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jk8DB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "defeat-game.0bca4b71.svg";

},{"./helpers/bundle-url":"8YnfL"}],"3Mqez":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tie-game.fa2e2602.svg";

},{"./helpers/bundle-url":"8YnfL"}],"cpQnk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "victory-game.12ac8f0a.svg";

},{"./helpers/bundle-url":"8YnfL"}],"3uBrB":[function(require,module,exports) {
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
        style.innerHTML = `\n                  .button-component {\n                    background: #006CFC;\n                    border: 10px solid #001997;\n                    border-radius: 10px;\n                    width: 322px;\n                    height: 87px;\n                    text-align: center;\n                    font-family: var(--font-button);\n                    font-size: 45px;\n                    color: #ffffff;\n                    box-sizing: border-box;\n                  }\n                  `;
        button.textContent = this.textContent;
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}],"ac3Pw":[function(require,module,exports) {
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
        this.shadow.innerHTML = `\n        <img src="${imageStone}" class="stone-hand" >\n        `;
        style.innerHTML = `\n            .stone-hand {\n              width: 103px;\n              height: 236px;\n            }\n            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../assets/images/stone-hand.svg":"arroN"}],"arroN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "stone-hand.c202a916.svg";

},{"./helpers/bundle-url":"8YnfL"}],"fDMTg":[function(require,module,exports) {
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
        this.shadow.innerHTML = `\n        <img src="${imagePaper}" class="paper-hand" >\n        `;
        style.innerHTML = `\n            .paper-hand {\n              width: 122px;\n              height: 236px;\n            }\n            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../assets/images/paper-hand.svg":"dlmER"}],"dlmER":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "paper-hand.3bba1904.svg";

},{"./helpers/bundle-url":"8YnfL"}],"dYGFK":[function(require,module,exports) {
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
        this.shadow.innerHTML = `\n        <img src="${imageScissor}" class="scissor-hand" >\n        `;
        style.innerHTML = `\n            .scissor-hand {\n              width: 103px;\n              height: 236px;\n              \n            }\n            `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../assets/images/scissor-hand.svg":"5w9GQ"}],"5w9GQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "scissor-hand.3beb956b.svg";

},{"./helpers/bundle-url":"8YnfL"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire96a8")

//# sourceMappingURL=index.b31310b1.js.map
