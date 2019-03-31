// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"node_modules/unique-random/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (min, max) {
  var prev;
  return function rand() {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return prev = num === prev && min !== max ? rand() : num;
  };
};
},{}],"node_modules/unique-random-array/index.js":[function(require,module,exports) {
'use strict';

var uniqueRandom = require('unique-random');

module.exports = function (arr) {
  var rand = uniqueRandom(0, arr.length - 1);
  return function () {
    return arr[rand()];
  };
};
},{"unique-random":"node_modules/unique-random/index.js"}],"node_modules/positivity-api/src/quotes.json":[function(require,module,exports) {
module.exports = [
  "With the new day comes new strength and new thoughts.",
  "Always do your best. What you plant now, you will harvest later.",
  "It always seems impossible until it's done.",
  "Problems are not stop signs, they are guidelines.",
  "The secret of getting ahead is getting started.",
  "We should not give up and we should not allow the problem to defeat us.",
  "Start where you are. Use what you have. Do what you can.",
  "What you do today can improve all your tomorrows.",
  "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
  "Accept the challenges so that you can feel the exhilaration of victory.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Set your goals high, and don't stop till you get there.",
  "Aim for the moon. If you miss, you may hit a star.",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
  "You can never quit. Winners never quit, and quitters never win.",
  "Arriving at one goal is the starting point to another.",
  "The forces of the Universe and I are with you. You’re awesome!",
  "Fall seven times, stand up eight.",
  "A problem is a chance for you to do your best.",
  "Problems are not stop signs, they are guidelines",
  "Patience, persistence and perspiration make an unbeatable combination for success.",
  "keep on keepin on!",
  "Little by little, inch by inch, you've got this.",
  "make yourself a cup of tea or coffee and go for a walk for a while.",
  "I'm not giving up on you. Shake things up! Use that big brain of your to think your way out. Look for a new angle.",
  "don't worry about a thing, cause every little thing's gonna be alright. - Bob Marley",
  "it's a marathon, not a sprint.",
  "When you are struggling...do not jump to any conclusions about your own capabilities.",
  "Life is about making an impact, not making an income.",
  "Strive not to be a success, but rather to be of value. –Albert Einstein",
  "Whatever the mind of man can conceive and believe, it can achieve. –Napoleon Hill",
  "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale",
  "You miss 100% of the shots you don’t take. –Wayne Gretzky",
  "The most difficult thing is the decision to act, the rest is merely tenacity. –Amelia Earhart",
  "Every strike brings me closer to the next home run. –Babe Ruth",
  "Definiteness of purpose is the starting point of all achievement. –W. Clement Stone",
  "The best time to plant a tree was 20 years ago. The second best time is now. –Chinese Proverb",
  "I am not a product of my circumstances. I am a product of my decisions. –Stephen Covey",
  "Winning isn’t everything, but wanting to win is. –Vince Lombardi",
  "Eighty percent of success is showing up. –Woody Allen",
  "Either you run the day, or the day runs you. –Jim Rohn",
  "The best revenge is massive success. –Frank Sinatra",
  "Life shrinks or expands in proportion to one's courage. –Anais Nin",
  "Believe you can and you’re halfway there. –Theodore Roosevelt",
  "Start where you are. Use what you have.  Do what you can. –Arthur Ashe",
  "Fall seven times and stand up eight. –Japanese Proverb",
  "When I let go of what I am, I become what I might be. –Lao Tzu",
  "Happiness is not something readymade.  It comes from your own actions. –Dalai Lama",
  "If the wind will not serve, take to the oars. –Latin Proverb",
  "If you want to lift yourself up, lift up someone else. –Booker T. Washington",
  "it always get darkest before dawn/> <when it gets dark, the stars come out/> <Rome wasn't built in a day",
  "You will never come up against a greater adversary than your own potential. - Star Trek: TNG"
]
;
},{}],"node_modules/positivity-api/src/index.js":[function(require,module,exports) {
const ura = require('unique-random-array')
const quotes = require('./quotes.json')

module.exports = {
  all: quotes,
  random: ura(quotes)
}


},{"unique-random-array":"node_modules/unique-random-array/index.js","./quotes.json":"node_modules/positivity-api/src/quotes.json"}],"index.js":[function(require,module,exports) {
"use strict";

var _positivityApi = _interopRequireDefault(require("positivity-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quote1 = _positivityApi.default.random();

var quote2 = _positivityApi.default.random();

var quote3 = _positivityApi.default.random();

var placeQuote1 = document.querySelector('#quote1');
var placeQuote2 = document.querySelector('#quote2');
var placeQuote3 = document.querySelector('#quote3');
placeQuote1.textContent = quote1;
placeQuote2.textContent = quote2;
placeQuote3.textContent = quote3;
},{"positivity-api":"node_modules/positivity-api/src/index.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56117" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=dist/quotes-app.e31bb0bc.map