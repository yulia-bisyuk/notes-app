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
})({"lmKb7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
// 'use strict';
var _refs = require("./src/js/refs");
var _actions = require("./src/js/actions");
var _populateTables = require("./src/js/populateTables");
var _toggleModal = require("./src/js/toggleModal");

},{"./src/js/actions":"cPL3H","./src/js/populateTables":"eYwyb","./src/js/toggleModal":"heS7o","./src/js/refs":"2WoF2"}],"cPL3H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNote", ()=>createNote);
parcelHelpers.export(exports, "deleteNote", ()=>deleteNote);
parcelHelpers.export(exports, "editNote", ()=>editNote);
parcelHelpers.export(exports, "setArchived", ()=>setArchived);
var _refs = require("./refs");
var _populateTables = require("./populateTables");
var _utils = require("../utils");
let isEdit = false;
let updateId;
const createNote = (e, notes)=>{
    e.preventDefault();
    const dates = (0, _utils.formatDate)((0, _refs.refs).startDate.value, (0, _refs.refs).endDate.value);
    if (!(0, _refs.refs).contentInput.value.trim()) {
        (0, _refs.refs).errorMessage.innerText = "*Please enter text of your note";
        return;
    }
    const noteDetails = {
        created: (0, _utils.setDate)(),
        category: (0, _refs.refs).categoryInput.value.trim(),
        content: (0, _refs.refs).contentInput.value.trim(),
        dates,
        archived: false
    };
    if (isEdit) {
        let noteToUpdate = notes.find((note)=>note.id === updateId);
        let noteToUpdateIdx = notes.indexOf(noteToUpdate);
        const updatedNote = {
            id: noteToUpdate.id,
            ...noteDetails
        };
        notes[noteToUpdateIdx] = updatedNote;
        isEdit = false;
    } else {
        const newNote = {
            id: Math.floor(Math.random() * 100),
            ...noteDetails
        };
        notes.push(newNote);
    }
    (0, _refs.refs).createForm.reset();
    (0, _refs.refs).closeButton.click();
    isEdit = false;
    (0, _populateTables.populateMainTable)();
    (0, _populateTables.populateSummaryTable)();
};
const deleteNote = (notes, index)=>{
    // const index = notes.indexOf((note) => note.id === id);
    notes.splice(index, 1);
    (0, _populateTables.populateMainTable)();
    (0, _populateTables.populateSummaryTable)();
};
const editNote = (note)=>{
    isEdit = true;
    updateId = note.id;
    (0, _refs.refs).createButton.click();
    (0, _refs.refs).modalTitle.innerText = "Edit Your Note";
    (0, _refs.refs).modalSubmitButton.innerText = "Edit";
    (0, _refs.refs).categoryInput.value = note.category;
    (0, _refs.refs).contentInput.value = note.content;
    isEdit = false;
};
const setArchived = (notes, id)=>{
    let noteToUpdate = notes.find((note)=>note.id === id);
    noteToUpdate.archived = true;
    (0, _populateTables.populateMainTable)();
    (0, _populateTables.populateSummaryTable)();
};

},{"./refs":"2WoF2","./populateTables":"eYwyb","../utils":"jxTvD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refs", ()=>refs);
const refs = {
    tableBody: document.getElementById("table-body"),
    summaryTableBody: document.getElementById("summary-table-body"),
    rowTemplate: document.getElementById("table-item"),
    summaryRowTemplate: document.getElementById("summary-table-item"),
    modal: document.getElementById("modal"),
    modalTitle: document.querySelector(".modal-title"),
    modalSubmitButton: document.getElementById("submit-button"),
    createButton: document.getElementById("create"),
    closeButton: document.getElementById("close"),
    createForm: document.getElementById("create-form"),
    categoryInput: document.getElementById("category"),
    contentInput: document.getElementById("note-content"),
    startDate: document.getElementById("start"),
    endDate: document.getElementById("end"),
    errorMessage: document.querySelector(".error-message")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"eYwyb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "populateMainTable", ()=>populateMainTable);
parcelHelpers.export(exports, "populateSummaryTable", ()=>populateSummaryTable);
var _refs = require("./refs");
var _notes = require("../data/notes");
var _utils = require("../utils");
var _actions = require("./actions");
const getActive = (notes)=>notes = notes.filter((note)=>!note.archived);
const getSummary = (notes)=>{
    const result = notes.reduce((acc, note)=>{
        const foundCategory = acc.find((item)=>item.category === note.category);
        if (!foundCategory) acc.push({
            category: note.category,
            active: 0,
            archived: 0
        });
        const index = acc.findIndex((item)=>item.category === note.category);
        note.archived ? acc[index].archived += 1 : acc[index].active += 1;
        return acc;
    }, []);
    return result;
};
const populateMainTable = ()=>{
    const activeNotes = getActive((0, _notes.notes));
    // remove old notes before render new
    document.querySelectorAll(".table-body-item").forEach((tr)=>tr.remove());
    return activeNotes.map((note, index)=>{
        let template = (0, _refs.refs).rowTemplate.content.cloneNode(true);
        template.querySelector(".created").textContent = note.created;
        template.querySelector(".category-icon").insertAdjacentHTML("afterbegin", (0, _utils.createCategoryIcon)(note.category) || "");
        template.querySelector(".category-name").textContent = note.category || "";
        template.querySelector(".content").textContent = note.content;
        template.querySelector(".dates").textContent = note.dates;
        const deleteBtn = template.querySelector(".delete-button");
        deleteBtn.addEventListener("click", ()=>(0, _actions.deleteNote)((0, _notes.notes), index));
        const editBtn = template.querySelector(".edit-button");
        editBtn.addEventListener("click", ()=>(0, _actions.editNote)(note));
        const archiveBtn = template.querySelector(".archive-button");
        archiveBtn.addEventListener("click", ()=>(0, _actions.setArchived)((0, _notes.notes), note.id));
        (0, _refs.refs).tableBody.appendChild(template);
    });
};
const populateSummaryTable = ()=>{
    const statistics = getSummary((0, _notes.notes));
    return statistics.map((item)=>{
        let summaryTemplate = (0, _refs.refs).summaryRowTemplate.content.cloneNode(true);
        summaryTemplate.querySelector(".category-icon").insertAdjacentHTML("afterbegin", (0, _utils.createCategoryIcon)(item.category) || "");
        summaryTemplate.querySelector(".category-name").textContent = item.category || "";
        summaryTemplate.querySelector(".active").textContent = item.active;
        summaryTemplate.querySelector(".archived").textContent = item.archived;
        (0, _refs.refs).summaryTableBody.appendChild(summaryTemplate);
    });
};
(0, _refs.refs).createForm.addEventListener("submit", (e)=>(0, _actions.createNote)(e, (0, _notes.notes)));
populateMainTable();
populateSummaryTable();

},{"./refs":"2WoF2","../data/notes":"4avu1","../utils":"jxTvD","./actions":"cPL3H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4avu1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "notes", ()=>notes);
const notes = [
    {
        id: 1,
        created: "Jul 08, 2023",
        category: "Task",
        content: "Learn Node.js till 10/09/2023",
        dates: "10/09/2023",
        archived: true
    },
    {
        id: 2,
        created: "Jul 20, 2023",
        category: "Random Thought",
        content: "Learn as if you will live forever, live like you will die tomorrow.",
        dates: "",
        archived: false
    },
    {
        id: 3,
        created: "Jul 21, 2023",
        category: "Idea",
        content: "Make a cake for my best friend birthday party",
        dates: "",
        archived: false
    },
    {
        id: 4,
        created: "Jul 21, 2023",
        category: "Task",
        content: "Get signature of Lady Gaga on her concerts 30/08/2023 and 01/09/2023",
        dates: "30/08/2023, 01/09/2023",
        archived: true
    },
    {
        id: 5,
        created: "Jul 23, 2023",
        category: "Idea",
        content: "Write web application using React.js + Node.js",
        dates: "",
        archived: false
    },
    {
        id: 6,
        created: "Jul 24, 2023",
        category: "Random Thought",
        content: "When you change your thoughts, remember to also change your world.",
        dates: "",
        archived: false
    },
    {
        id: 7,
        created: "Jul 26, 2023",
        category: "Task",
        content: "To buy a book about JavaScript ",
        dates: "",
        archived: false
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxTvD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDate", ()=>setDate);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "createCategoryIcon", ()=>createCategoryIcon);
const setDate = ()=>{
    const newDate = new Date();
    const date = newDate.toDateString().slice(4, 10) + "," + newDate.toDateString().slice(10, 15);
    return date;
};
const formatDate = (start, end)=>{
    if (!start && !end) return;
    const dateReverse = (date)=>{
        const dateParts = date.split("-");
        return dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
    };
    if (!start) return dateReverse(end);
    else if (!end) return dateReverse(start);
    else return `${dateReverse(start)}, ${dateReverse(end)}`;
};
const createCategoryIcon = (category)=>{
    if (category === "Task") return `<svg
        class='category-icon'
        width='30'
        height='30'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <path
          fill='none'
          stroke='#777'
          style='stroke: var(--color1, #777)'
          stroke-linejoin='round'
          stroke-linecap='round'
          stroke-miterlimit='4'
          stroke-width='2'
          d='M12 8h14.667M5.067 7.733l1.067 1.067 2.667-2.667M5.067 15.733l1.067 1.067 2.667-2.667M5.067 23.733l1.067 1.067 2.667-2.667M12 16h14.667M12 24h14.667'
        ></path>
      </svg>`;
    if (category === "Random Thought") return `<svg
        class='category-icon'
        width='35'
        height='35'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#777'
          style='fill: var(--color1, #777)'
          d='M5.333 24c0.707 0 1.386 0.281 1.886 0.781s0.781 1.178 0.781 1.886c0 0.707-0.281 1.385-0.781 1.886s-1.178 0.781-1.886 0.781c-0.707 0-1.386-0.281-1.886-0.781s-0.781-1.178-0.781-1.886c0-0.707 0.281-1.385 0.781-1.886s1.178-0.781 1.886-0.781zM5.333 26c-0.177 0-0.346 0.070-0.471 0.195s-0.195 0.295-0.195 0.471 0.070 0.346 0.195 0.471c0.125 0.125 0.295 0.195 0.471 0.195s0.346-0.070 0.471-0.195c0.125-0.125 0.195-0.295 0.195-0.471s-0.070-0.346-0.195-0.471c-0.125-0.125-0.295-0.195-0.471-0.195zM12.667 20c0.884 0 1.732 0.351 2.357 0.976s0.976 1.473 0.976 2.357-0.351 1.732-0.976 2.357c-0.625 0.625-1.473 0.976-2.357 0.976s-1.732-0.351-2.357-0.976c-0.625-0.625-0.976-1.473-0.976-2.357s0.351-1.732 0.976-2.357c0.625-0.625 1.473-0.976 2.357-0.976zM12.667 22c-0.354 0-0.693 0.141-0.943 0.391s-0.391 0.589-0.391 0.943c0 0.354 0.14 0.693 0.391 0.943s0.589 0.391 0.943 0.391c0.354 0 0.693-0.141 0.943-0.391s0.391-0.589 0.391-0.943c0-0.354-0.141-0.693-0.391-0.943s-0.589-0.391-0.943-0.391zM15.764 2.667c1.696 0 3.338 0.598 4.637 1.688s2.174 2.602 2.469 4.272h0.109c1.331 0 2.608 0.529 3.55 1.47s1.47 2.218 1.47 3.55c0 1.331-0.529 2.608-1.47 3.55s-2.218 1.47-3.55 1.47h-14.431c-1.331 0-2.608-0.529-3.55-1.47s-1.47-2.218-1.47-3.55c0-1.331 0.529-2.608 1.47-3.55s2.218-1.47 3.55-1.47h0.108c0.296-1.67 1.17-3.183 2.469-4.272s2.941-1.687 4.637-1.688zM15.772 4.664c-1.343-0-2.635 0.515-3.608 1.44s-1.554 2.189-1.622 3.53c-0.012 0.237-0.114 0.46-0.286 0.624s-0.4 0.255-0.637 0.255h-0.933c-0.414-0.015-0.826 0.054-1.212 0.202s-0.739 0.372-1.037 0.66c-0.298 0.287-0.535 0.632-0.697 1.013s-0.245 0.79-0.245 1.204c0 0.414 0.083 0.823 0.245 1.204s0.399 0.725 0.697 1.013 0.651 0.512 1.037 0.66c0.386 0.148 0.799 0.217 1.212 0.202h14.173c0.414 0.015 0.826-0.054 1.212-0.202s0.739-0.372 1.037-0.66c0.298-0.287 0.535-0.632 0.696-1.013s0.245-0.79 0.245-1.204c0-0.414-0.083-0.823-0.245-1.204s-0.399-0.725-0.696-1.013c-0.298-0.287-0.651-0.512-1.037-0.66s-0.799-0.217-1.212-0.202h-0.933c-0.237-0-0.465-0.091-0.637-0.255s-0.274-0.387-0.286-0.624c-0.068-1.341-0.649-2.605-1.622-3.53s-2.265-1.441-3.608-1.44z'
        ></path>
      </svg>`;
    if (category === "Idea") return `<svg
        class='category-icon'
        width='30'
        height='30'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <path
          fill='#777'
          style='fill: var(--color1, #777); stroke: var(--color1, #777)'
          stroke='#777'
          stroke-linejoin='miter'
          stroke-linecap='butt'
          stroke-miterlimit='4'
          stroke-width='0.8'
          d='M15.9 4.009c4.754-0.221 8.693 3.58 8.693 8.287 0 2.364-0.994 4.501-2.584 6.011-0.629 0.597-0.964 1.463-0.964 2.357v1.016c0 2.168-1.769 3.935-3.937 3.935h-2.947c-0.276 0-0.488 0.213-0.486 0.489 0.001 0.274 0.212 0.484 0.486 0.484h4.35c0.815 0 1.487 0.672 1.487 1.487v0.050c0 0.815-0.672 1.487-1.487 1.487h-4.266c-0.066 0.001-0.132-0.011-0.194-0.036s-0.117-0.061-0.165-0.108-0.085-0.102-0.11-0.163c-0.026-0.061-0.039-0.127-0.039-0.193s0.013-0.132 0.039-0.193c0.026-0.061 0.063-0.117 0.11-0.163s0.103-0.083 0.165-0.108c0.062-0.025 0.127-0.037 0.194-0.036h4.266c0.275 0 0.487-0.213 0.487-0.487v-0.050c0-0.275-0.213-0.487-0.487-0.487h-4.35c-0.813 0-1.483-0.667-1.486-1.481-0.004-0.818 0.669-1.493 1.486-1.493h2.947c1.627 0 2.937-1.308 2.937-2.935v-1.016c0-1.144 0.427-2.277 1.275-3.083 1.4-1.329 2.272-3.201 2.272-5.285 0-4.152-3.448-7.484-7.646-7.288-3.477 0.162-6.751 3.415-6.936 6.891-0.115 2.177 0.721 4.147 2.13 5.554 0.844 0.843 1.403 1.982 1.407 3.211 0.005 1.17 0.835 1.95 1.5 1.95h1.702v-5.826c-0.551-0.077-1.091-0.243-1.531-0.596-0.575-0.46-0.969-1.189-0.969-2.078 0-1.208 0.858-2 1.75-2s1.75 0.792 1.75 2v1.589c0.323-0.072 0.672-0.105 0.906-0.292 0.363-0.29 0.594-0.686 0.594-1.297-0.001-0.066 0.011-0.132 0.036-0.194s0.061-0.117 0.108-0.165c0.047-0.047 0.102-0.085 0.163-0.11s0.127-0.039 0.193-0.039c0.066 0 0.132 0.013 0.193 0.039s0.117 0.063 0.163 0.11c0.047 0.047 0.083 0.103 0.108 0.165s0.037 0.127 0.036 0.194c0 0.889-0.394 1.618-0.969 2.078-0.441 0.352-0.98 0.518-1.531 0.596v6.326c0 0.133-0.053 0.26-0.146 0.353s-0.221 0.147-0.354 0.147h-2.202c-1.355 0-2.493-1.311-2.5-2.946-0.003-0.926-0.433-1.827-1.114-2.507-1.6-1.597-2.553-3.849-2.422-6.314 0.215-4.052 3.835-7.648 7.888-7.837zM15.75 14.114c0-0.792-0.392-1-0.75-1s-0.75 0.208-0.75 1c0 0.611 0.231 1.007 0.594 1.297 0.234 0.187 0.583 0.22 0.906 0.292v-1.589z'
        ></path>
      </svg>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"heS7o":[function(require,module,exports) {
var _refs = require("./refs");
(0, _refs.refs).createButton.addEventListener("click", ()=>{
    (0, _refs.refs).modal.classList.remove("hidden");
    (0, _refs.refs).modalTitle.innerText = "Create New Note";
    (0, _refs.refs).modalSubmitButton.innerText = "Create";
    (0, _refs.refs).errorMessage.innerText = "";
});
(0, _refs.refs).closeButton.addEventListener("click", ()=>{
    (0, _refs.refs).modal.classList.add("hidden");
});

},{"./refs":"2WoF2"}]},["lmKb7","adjPd"], "adjPd", "parcelRequire3e88")

//# sourceMappingURL=index.63aff760.js.map
