// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/refs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refs = void 0;
var refs = {
  tableBody: document.getElementById('table-body'),
  modal: document.getElementById('modal'),
  createButton: document.getElementById('create'),
  closeButton: document.getElementById('close'),
  categoryInput: document.getElementById('category'),
  contentInput: document.getElementById('note-content'),
  submitButton: document.getElementById('submit-button'),
  createForm: document.getElementById('create-form')
};
exports.refs = refs;
},{}],"utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDate = void 0;
var setDate = function setDate() {
  var newDate = new Date();
  // Wed Jul 26 2023 21:37:58 GMT+0300 (Eastern European Summer Time)
  //.split('-').reverse().join('/');

  //[str.slice(0, end + step), ',', str.slice(end + step)].join('');
  var date = newDate.toDateString().slice(4, 10) + ',' + newDate.toDateString().slice(10, 15);
  return date;
};
exports.setDate = setDate;
},{}],"data/notes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notes = void 0;
var _utils = require("../utils");
var notes = [{
  id: 1,
  created: (0, _utils.setDate)(),
  category: 'Task',
  content: 'Learn Node.js till 10/9/2023'
}, {
  id: 2,
  created: (0, _utils.setDate)(),
  category: 'Random Thought',
  content: 'Learn as if you will live forever, live like you will die tomorrow.'
}, {
  id: 3,
  created: (0, _utils.setDate)(),
  category: 'Idea',
  content: 'Make a cake for my best friend birthday party'
}, {
  id: 4,
  created: (0, _utils.setDate)(),
  category: 'Task',
  content: 'Get signature Lady Gaga on her concert 30/8/2023'
}, {
  id: 5,
  created: (0, _utils.setDate)(),
  category: 'Idea',
  content: 'Write web application using React.js + Node.js'
}, {
  id: 6,
  created: (0, _utils.setDate)(),
  category: 'Random Thought',
  content: 'When you change your thoughts, remember to also change your world.'
}, {
  id: 7,
  created: (0, _utils.setDate)(),
  category: 'Task',
  content: 'To buy a book about JavaScript '
}];
exports.notes = notes;
console.log("notes: ", notes);
},{"../utils":"utils/index.js"}],"js/templates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCategoryIcon = void 0;
var createCategoryIcon = function createCategoryIcon(category) {
  if (category === 'Task') {
    return "<svg\n        class='category-icon'\n        width='30'\n        height='30'\n        viewBox='0 0 32 32'\n        xmlns='http://www.w3.org/2000/svg'\n        fill='none'\n      >\n        <path\n          fill='none'\n          stroke='#777'\n          style='stroke: var(--color1, #777)'\n          stroke-linejoin='round'\n          stroke-linecap='round'\n          stroke-miterlimit='4'\n          stroke-width='2'\n          d='M12 8h14.667M5.067 7.733l1.067 1.067 2.667-2.667M5.067 15.733l1.067 1.067 2.667-2.667M5.067 23.733l1.067 1.067 2.667-2.667M12 16h14.667M12 24h14.667'\n        ></path>\n      </svg>";
  }
  if (category === 'Random Thought') {
    return "<svg\n        class='category-icon'\n        width='35'\n        height='35'\n        viewBox='0 0 32 32'\n        xmlns='http://www.w3.org/2000/svg'\n      >\n        <path\n          fill='#777'\n          style='fill: var(--color1, #777)'\n          d='M5.333 24c0.707 0 1.386 0.281 1.886 0.781s0.781 1.178 0.781 1.886c0 0.707-0.281 1.385-0.781 1.886s-1.178 0.781-1.886 0.781c-0.707 0-1.386-0.281-1.886-0.781s-0.781-1.178-0.781-1.886c0-0.707 0.281-1.385 0.781-1.886s1.178-0.781 1.886-0.781zM5.333 26c-0.177 0-0.346 0.070-0.471 0.195s-0.195 0.295-0.195 0.471 0.070 0.346 0.195 0.471c0.125 0.125 0.295 0.195 0.471 0.195s0.346-0.070 0.471-0.195c0.125-0.125 0.195-0.295 0.195-0.471s-0.070-0.346-0.195-0.471c-0.125-0.125-0.295-0.195-0.471-0.195zM12.667 20c0.884 0 1.732 0.351 2.357 0.976s0.976 1.473 0.976 2.357-0.351 1.732-0.976 2.357c-0.625 0.625-1.473 0.976-2.357 0.976s-1.732-0.351-2.357-0.976c-0.625-0.625-0.976-1.473-0.976-2.357s0.351-1.732 0.976-2.357c0.625-0.625 1.473-0.976 2.357-0.976zM12.667 22c-0.354 0-0.693 0.141-0.943 0.391s-0.391 0.589-0.391 0.943c0 0.354 0.14 0.693 0.391 0.943s0.589 0.391 0.943 0.391c0.354 0 0.693-0.141 0.943-0.391s0.391-0.589 0.391-0.943c0-0.354-0.141-0.693-0.391-0.943s-0.589-0.391-0.943-0.391zM15.764 2.667c1.696 0 3.338 0.598 4.637 1.688s2.174 2.602 2.469 4.272h0.109c1.331 0 2.608 0.529 3.55 1.47s1.47 2.218 1.47 3.55c0 1.331-0.529 2.608-1.47 3.55s-2.218 1.47-3.55 1.47h-14.431c-1.331 0-2.608-0.529-3.55-1.47s-1.47-2.218-1.47-3.55c0-1.331 0.529-2.608 1.47-3.55s2.218-1.47 3.55-1.47h0.108c0.296-1.67 1.17-3.183 2.469-4.272s2.941-1.687 4.637-1.688zM15.772 4.664c-1.343-0-2.635 0.515-3.608 1.44s-1.554 2.189-1.622 3.53c-0.012 0.237-0.114 0.46-0.286 0.624s-0.4 0.255-0.637 0.255h-0.933c-0.414-0.015-0.826 0.054-1.212 0.202s-0.739 0.372-1.037 0.66c-0.298 0.287-0.535 0.632-0.697 1.013s-0.245 0.79-0.245 1.204c0 0.414 0.083 0.823 0.245 1.204s0.399 0.725 0.697 1.013 0.651 0.512 1.037 0.66c0.386 0.148 0.799 0.217 1.212 0.202h14.173c0.414 0.015 0.826-0.054 1.212-0.202s0.739-0.372 1.037-0.66c0.298-0.287 0.535-0.632 0.696-1.013s0.245-0.79 0.245-1.204c0-0.414-0.083-0.823-0.245-1.204s-0.399-0.725-0.696-1.013c-0.298-0.287-0.651-0.512-1.037-0.66s-0.799-0.217-1.212-0.202h-0.933c-0.237-0-0.465-0.091-0.637-0.255s-0.274-0.387-0.286-0.624c-0.068-1.341-0.649-2.605-1.622-3.53s-2.265-1.441-3.608-1.44z'\n        ></path>\n      </svg>";
  }
  if (category === 'Idea') {
    return "<svg\n        class='category-icon'\n        width='30'\n        height='30'\n        viewBox='0 0 32 32'\n        xmlns='http://www.w3.org/2000/svg'\n        fill='none'\n      >\n        <path\n          fill='#777'\n          style='fill: var(--color1, #777); stroke: var(--color1, #777)'\n          stroke='#777'\n          stroke-linejoin='miter'\n          stroke-linecap='butt'\n          stroke-miterlimit='4'\n          stroke-width='0.8'\n          d='M15.9 4.009c4.754-0.221 8.693 3.58 8.693 8.287 0 2.364-0.994 4.501-2.584 6.011-0.629 0.597-0.964 1.463-0.964 2.357v1.016c0 2.168-1.769 3.935-3.937 3.935h-2.947c-0.276 0-0.488 0.213-0.486 0.489 0.001 0.274 0.212 0.484 0.486 0.484h4.35c0.815 0 1.487 0.672 1.487 1.487v0.050c0 0.815-0.672 1.487-1.487 1.487h-4.266c-0.066 0.001-0.132-0.011-0.194-0.036s-0.117-0.061-0.165-0.108-0.085-0.102-0.11-0.163c-0.026-0.061-0.039-0.127-0.039-0.193s0.013-0.132 0.039-0.193c0.026-0.061 0.063-0.117 0.11-0.163s0.103-0.083 0.165-0.108c0.062-0.025 0.127-0.037 0.194-0.036h4.266c0.275 0 0.487-0.213 0.487-0.487v-0.050c0-0.275-0.213-0.487-0.487-0.487h-4.35c-0.813 0-1.483-0.667-1.486-1.481-0.004-0.818 0.669-1.493 1.486-1.493h2.947c1.627 0 2.937-1.308 2.937-2.935v-1.016c0-1.144 0.427-2.277 1.275-3.083 1.4-1.329 2.272-3.201 2.272-5.285 0-4.152-3.448-7.484-7.646-7.288-3.477 0.162-6.751 3.415-6.936 6.891-0.115 2.177 0.721 4.147 2.13 5.554 0.844 0.843 1.403 1.982 1.407 3.211 0.005 1.17 0.835 1.95 1.5 1.95h1.702v-5.826c-0.551-0.077-1.091-0.243-1.531-0.596-0.575-0.46-0.969-1.189-0.969-2.078 0-1.208 0.858-2 1.75-2s1.75 0.792 1.75 2v1.589c0.323-0.072 0.672-0.105 0.906-0.292 0.363-0.29 0.594-0.686 0.594-1.297-0.001-0.066 0.011-0.132 0.036-0.194s0.061-0.117 0.108-0.165c0.047-0.047 0.102-0.085 0.163-0.11s0.127-0.039 0.193-0.039c0.066 0 0.132 0.013 0.193 0.039s0.117 0.063 0.163 0.11c0.047 0.047 0.083 0.103 0.108 0.165s0.037 0.127 0.036 0.194c0 0.889-0.394 1.618-0.969 2.078-0.441 0.352-0.98 0.518-1.531 0.596v6.326c0 0.133-0.053 0.26-0.146 0.353s-0.221 0.147-0.354 0.147h-2.202c-1.355 0-2.493-1.311-2.5-2.946-0.003-0.926-0.433-1.827-1.114-2.507-1.6-1.597-2.553-3.849-2.422-6.314 0.215-4.052 3.835-7.648 7.888-7.837zM15.75 14.114c0-0.792-0.392-1-0.75-1s-0.75 0.208-0.75 1c0 0.611 0.231 1.007 0.594 1.297 0.234 0.187 0.583 0.22 0.906 0.292v-1.589z'\n        ></path>\n      </svg>";
  }
};
exports.createCategoryIcon = createCategoryIcon;
},{}],"js/populateTable.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs");
var _notes = require("../data/notes");
var _templates = require("./templates");
var populateTable = function populateTable(content) {
  var rows = content.map(function (elem) {
    var dates = elem.content.includes('10/9/2023') ? '10/9/2023' : '';
    return " <tr class=\"table-body-item\">\n    <td>".concat(elem.created, "</td>\n    <td>\n    <div class=\"flex-start\">\n    ").concat((0, _templates.createCategoryIcon)(elem.category), " <span>").concat(elem.category, "</span>\n    </div>\n    </td>\n    <td>").concat(elem.content, "</td>\n    <td>").concat(dates, "</td>\n    <td >\n    <div class=\"flex\">\n\n<button class=\"table-body-button\">\n<svg\nwidth='30'\nheight='30'\nviewBox='0 0 32 32'\nxmlns='http://www.w3.org/2000/svg'\nfill=\"none\"\n>\n<path d=\"M15 6.00019L18 9.00019M13 20.0002H21M5 16.0002L4 20.0002L8 19.0002L19.586 7.41419C19.9609 7.03913 20.1716 6.53051 20.1716 6.00019C20.1716 5.46986 19.9609 4.96124 19.586 4.58619L19.414 4.41419C19.0389 4.03924 18.5303 3.82861 18 3.82861C17.4697 3.82861 16.9611 4.03924 16.586 4.41419L5 16.0002Z\" stroke=\"#777777\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n</button>\n\n<button class=\"table-body-button\">\n<svg\nwidth='30'\nheight='30'\nviewBox='0 0 32 32'\nxmlns='http://www.w3.org/2000/svg'\n>\n<path d=\"M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z\" fill=\"#777777\"/>\n</svg>\n</button class=\"table-body-button\">\n\n<button class=\"table-body-button\">\n<svg\nwidth='30'\nheight='30'\nviewBox='0 0 32 32'\nxmlns='http://www.w3.org/2000/svg'\n>\n<path d=\"M7 4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H19.931L19.064 20.142C19.0281 20.6466 18.8023 21.1188 18.4321 21.4636C18.0619 21.8083 17.5749 22 17.069 22H6.93C6.42414 22 5.93707 21.8083 5.56688 21.4636C5.1967 21.1188 4.97092 20.6466 4.935 20.142L4.07 8H3C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H7V4ZM9 6H15V4H9V6ZM6.074 8L6.931 20H17.07L17.927 8H6.074ZM10 10C10.2652 10 10.5196 10.1054 10.7071 10.2929C10.8946 10.4804 11 10.7348 11 11V17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17V11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10ZM14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10Z\" fill=\"#777777\"/>\n</svg>\n</button>\n\n </div>\n</td>\n  </tr>");
  }).join('');
  _refs.refs.tableBody.insertAdjacentHTML('beforeend', rows);
};
populateTable(_notes.notes);
},{"./refs":"js/refs.js","../data/notes":"data/notes.js","./templates":"js/templates.js"}],"js/toggleModal.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs");
_refs.refs.createButton.addEventListener('click', function () {
  _refs.refs.modal.classList.remove('hidden');
});
_refs.refs.closeButton.addEventListener('click', function () {
  _refs.refs.modal.classList.add('hidden');
});
},{"./refs":"js/refs.js"}],"js/createNote.js":[function(require,module,exports) {
"use strict";

var _refs = require("./refs");
var _notes = require("../data/notes");
var _utils = require("../utils");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
_refs.refs.createForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  var newNote = {
    id: Math.floor(Math.random() * 100),
    created: (0, _utils.setDate)(),
    category: _refs.refs.categoryInput.value,
    content: _refs.refs.contentInput.value
  };
  var updatedNotes = [].concat(_toConsumableArray(_notes.notes), [newNote]);
  //   notes = updatedNotes;
  console.log("updatedNotes: ", updatedNotes);
  //   return notes;
  return updatedNotes;

  //   console.log(`  refs.contentInput.value: `, refs.contentInput.value);
}
},{"./refs":"js/refs.js","../data/notes":"data/notes.js","../utils":"utils/index.js"}],"main.js":[function(require,module,exports) {
'use strict';

require("./style.scss");
require("./js/populateTable");
require("./js/toggleModal");
require("./js/createNote");
},{"./style.scss":"style.scss","./js/populateTable":"js/populateTable.js","./js/toggleModal":"js/toggleModal.js","./js/createNote":"js/createNote.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59786" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map