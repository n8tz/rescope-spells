/*!
 * MIT License
 * 
 * Copyright (c) 2018 Wise Wild Web
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _rescope = __webpack_require__(1);
	
	var _rescope2 = _interopRequireDefault(_rescope);
	
	__webpack_require__(2);
	
	__webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _rescope2.default.spells; /*
	                                             * Copyright (c)  2018 Wise Wild Web .
	                                             *
	                                             *  MIT License
	                                             *
	                                             *  Permission is hereby granted, free of charge, to any person obtaining a copy
	                                             *  of this software and associated documentation files (the "Software"), to deal
	                                             *  in the Software without restriction, including without limitation the rights
	                                             *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                             *  copies of the Software, and to permit persons to whom the Software is
	                                             *  furnished to do so, subject to the following conditions:
	                                             *
	                                             *  The above copyright notice and this permission notice shall be included in all
	                                             *  copies or substantial portions of the Software.
	                                             *
	                                             *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                             *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                             *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                             *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                             *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                             *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                             *  SOFTWARE.
	                                             *
	                                             * @author : Nathanael Braun
	                                             * @contact : caipilabs@gmail.com
	                                             */

	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("rescope");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _rescope = __webpack_require__(1);
	
	var _rescope2 = _interopRequireDefault(_rescope);
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// will use as external the index in dist
	
	/*
	 * Copyright (c)  2018 Wise Wild Web .
	 *
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the "Software"), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in all
	 *  copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 *  SOFTWARE.
	 *
	 * @author : Nathanael Braun
	 * @contact : caipilabs@gmail.com
	 */
	var SimpleObjectProto = {}.constructor;
	_rescope2.default.spells = {};
	
	var castTypesToAppliable = {};
	var castTypes = {};
	
	_rescope2.default.isSpell = function caster() {
		for (var _len = arguments.length, argz = Array(_len), _key = 0; _key < _len; _key++) {
			argz[_key] = arguments[_key];
		}
	
		// are we decorating a member / without argz
		if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
			argz[0][argz[1]] = argz[2].value = addCaster(argz[0][argz[1]], argz);
			return argz[0];
		} else if (!_is2.default.fn(argz[0])) {
			return function () {
				for (var _len2 = arguments.length, argz2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					argz2[_key2] = arguments[_key2];
				}
	
				// are we decorating a member / with argz
				if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
					argz2[2].value = addCaster.apply(undefined, [argz2[0][argz2[1]]].concat(argz, [argz2]));
					return argz2[0];
				} else return caster.apply(undefined, [argz2[0]].concat(argz));
			};
		}
		return addCaster.apply(undefined, argz);
	};
	
	function addCaster() {
		for (var _len3 = arguments.length, argz = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			argz[_key3] = arguments[_key3];
		}
	
		var cast = (!argz[0] || _is2.default.fn(argz[0])) && argz.shift();
		if (!cast) throw "ReScope cast : bad decorator function";
		var typeName = (!argz[0] || _is2.default.string(argz[0])) && argz.shift() || cast.name || cast.displayName,
		    test = (!argz[0] || _is2.default.fn(argz[0])) && argz.shift(),
		    prefix = (!argz[0] || _is2.default.string(argz[0])) && argz.shift() || "as",
		    memberDescr = (!argz[0] || _is2.default.bool(argz[0]) || _is2.default.array(argz[0])) && argz.shift() || true,
		    casterName = typeName && prefix + typeName[0].toUpperCase() + typeName.substr(1);
	
		if (!castTypesToAppliable[typeName]) {
			castTypesToAppliable[typeName] = [];
	
			_rescope2.default.spells[casterName] = castTypes[typeName] = function doCast() {
				for (var _len4 = arguments.length, argz = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
					argz[_key4] = arguments[_key4];
				}
	
				// are we decorating a member / without argz
				if (argz[0] instanceof SimpleObjectProto && argz[2] instanceof SimpleObjectProto && argz[0].hasOwnProperty(argz[1])) {
					argz[0][argz[1]] = applyCastableType(typeName, argz[0][argz[1]], [], argz);
					return argz[0];
				} else if (!isCastableType(typeName, argz[0])) {
					return function () {
						for (var _len5 = arguments.length, argz2 = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
							argz2[_key5] = arguments[_key5];
						}
	
						// are we decorating a member / with argz
						if (argz2[0] instanceof SimpleObjectProto && argz2[2] instanceof SimpleObjectProto && argz2[0].hasOwnProperty(argz2[1])) {
							argz2[0][argz2[1]] = applyCastableType(typeName, argz2[0][argz2[1]], argz, argz2);
							return argz2[0];
						} else return doCast.apply(undefined, [argz2[0]].concat(argz));
					};
				}
				return applyCastableType(typeName, argz[0], argz.slice(1));
			};
		}
		castTypesToAppliable[typeName].unshift({
			typeName: typeName, test: test, memberDescr: memberDescr, cast: cast
		});
		return castTypes[typeName];
	}
	
	function isCastableType(typeName, Comp, member, stateScope) {
		var castable = castTypesToAppliable[typeName];
		for (var i = 0; i < castable.length; i++) {
			if ((member === undefined || !!member == !!castable[i].memberDescr) && castable[i].test(Comp)) return castable[i];
		}return false;
	}
	
	function applyCastableType(typeName, Comp, argz, member, stateScope) {
	
		var castable = castTypesToAppliable[typeName] || [];
		for (var i = 0; i < castable.length; i++) {
			if ((member === undefined || !!member == !!castable[i].memberDescr) && castable[i].test(Comp)) return castable[i].cast(Comp, argz, member);
		}console.warn("reScope cast : Unknown type", typeName, Comp);
		return false;
	}
	
	exports.default = _rescope2.default;
	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("is");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class, _dec3, _dec4, _dec5, _dec6, _desc, _value, _obj; /*
	                                                                           * Copyright (c)  2018 Wise Wild Web .
	                                                                           *
	                                                                           *  MIT License
	                                                                           *
	                                                                           *  Permission is hereby granted, free of charge, to any person obtaining a copy
	                                                                           *  of this software and associated documentation files (the "Software"), to deal
	                                                                           *  in the Software without restriction, including without limitation the rights
	                                                                           *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	                                                                           *  copies of the Software, and to permit persons to whom the Software is
	                                                                           *  furnished to do so, subject to the following conditions:
	                                                                           *
	                                                                           *  The above copyright notice and this permission notice shall be included in all
	                                                                           *  copies or substantial portions of the Software.
	                                                                           *
	                                                                           *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	                                                                           *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	                                                                           *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	                                                                           *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	                                                                           *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	                                                                           *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	                                                                           *  SOFTWARE.
	                                                                           *
	                                                                           * @author : Nathanael Braun
	                                                                           * @contact : caipilabs@gmail.com
	                                                                           */
	
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(6);
	
	var _is = __webpack_require__(3);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _reactRescope = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;
	
		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}
	
		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);
	
		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}
	
		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}
	
		return desc;
	}
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RSComp = (_dec = (0, _reactRescope.propsToScope)(['props']), _dec2 = (0, _reactRescope.scopeToProps)(['props']), _dec(_class = _dec2(_class = function (_Component) {
		_inherits(RSComp, _Component);
	
		function RSComp() {
			_classCallCheck(this, RSComp);
	
			return _possibleConstructorReturn(this, (RSComp.__proto__ || Object.getPrototypeOf(RSComp)).apply(this, arguments));
		}
	
		_createClass(RSComp, [{
			key: "render",
			value: function render() {
				return this.props.children || [];
			}
		}]);
	
		return RSComp;
	}(_reactRescope.Component)) || _class) || _class);
	
	
	var Lib = (_dec3 = (0, _reactRescope.isSpell)("store", function (v) {
		return _is2.default.object(v) || _is2.default.string(v);
	}), _dec4 = (0, _reactRescope.isSpell)("scope", function (v) {
		return _is2.default.object(v);
	}), _dec5 = (0, _reactRescope.isSpell)("ref", function (v) {
		return _is2.default.string(v);
	}), _dec6 = (0, _reactRescope.isSpell)("stateMap", function (v) {
		return v === _reactRescope.Store || v.prototype instanceof _reactRescope.Store;
	}, 'with'), (_obj = {
		store: function store(obj, _ref, ref) {
			var _class2, _temp2, _class3, _temp3;
	
			var cfg = _ref[0];
	
			var use = [],
			    state = {},
			    actions = {},
			    applier = obj.$apply;
			if (applier) obj = _extends({}, obj), delete obj.$apply;
			_reactRescope.Scope.stateMapToRefList(obj, state, use, actions);
			if (applier) return _temp2 = _class2 = function (_Store) {
				_inherits(StateMapWA, _Store);
	
				function StateMapWA() {
					var _ref2;
	
					var _temp, _this2, _ret;
	
					_classCallCheck(this, StateMapWA);
	
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}
	
					return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = StateMapWA.__proto__ || Object.getPrototypeOf(StateMapWA)).call.apply(_ref2, [this].concat(args))), _this2), _this2.apply = applier, _temp), _possibleConstructorReturn(_this2, _ret);
				}
	
				return StateMapWA;
			}(_reactRescope.Store), _class2.displayName = ref[1], _class2.use = use, _class2.state = state, _class2.actions = actions, _temp2;else return _temp3 = _class3 = function (_Store2) {
				_inherits(StateMap, _Store2);
	
				function StateMap() {
					_classCallCheck(this, StateMap);
	
					return _possibleConstructorReturn(this, (StateMap.__proto__ || Object.getPrototypeOf(StateMap)).apply(this, arguments));
				}
	
				return StateMap;
			}(_reactRescope.Store), _class3.displayName = ref[1], _class3.use = use, _class3.state = state, _class3.actions = actions, _temp3;
		},
		scope: function scope(obj, _ref3, ref) {
			var cfg = _ref3[0];
	
			return function (_Scope) {
				_inherits(childScope, _Scope);
	
				function childScope(map, cfg2) {
					_classCallCheck(this, childScope);
	
					return _possibleConstructorReturn(this, (childScope.__proto__ || Object.getPrototypeOf(childScope)).call(this, _extends({}, obj, map), _extends({}, cfg, cfg2)));
				}
	
				return childScope;
			}(_reactRescope.Scope);
		},
		ref: function ref(obj, _ref5, _ref4) {
			var cfg = _ref5[0];
	
	
			return new _reactRescope.Scope.scopeRef(obj);
		},
		stateMap: function stateMap(obj, _ref6) {
			var _class4, _temp4, _class5, _temp5;
	
			var _stateMap = _ref6[0];
	
			var use = [],
			    initialState = {},
			    actions = {},
			    applier = _stateMap.$apply;
			if (_stateMap.$apply) _stateMap = _extends({}, _stateMap), delete _stateMap.$apply;
			_stateMap && _reactRescope.Scope.stateMapToRefList(_stateMap, initialState, use, actions);
			if (applier) return _temp4 = _class4 = function (_obj2) {
				_inherits(withStateMap, _obj2);
	
				function withStateMap() {
					_classCallCheck(this, withStateMap);
	
					return _possibleConstructorReturn(this, (withStateMap.__proto__ || Object.getPrototypeOf(withStateMap)).apply(this, arguments));
				}
	
				_createClass(withStateMap, [{
					key: "apply",
					value: function apply() {
						return applier.apply(this, arguments);
					}
				}]);
	
				return withStateMap;
			}(obj), _class4.displayName = obj.displayName || obj.name, _class4.actions = obj.actions && _extends({}, obj.actions, actions) || actions, _class4.state = obj.state && _extends({}, obj.state, initialState) || initialState, _class4.use = obj.use && [].concat(_toConsumableArray(obj.use), use) || use, _temp4;else return _temp5 = _class5 = function (_obj3) {
				_inherits(withStateMap, _obj3);
	
				function withStateMap() {
					_classCallCheck(this, withStateMap);
	
					return _possibleConstructorReturn(this, (withStateMap.__proto__ || Object.getPrototypeOf(withStateMap)).apply(this, arguments));
				}
	
				return withStateMap;
			}(obj), _class5.displayName = obj.displayName || obj.name, _class5.actions = obj.actions && _extends({}, obj.actions, actions) || actions, _class5.state = obj.state && _extends({}, obj.state, initialState) || initialState, _class5.use = obj.use && [].concat(_toConsumableArray(obj.use), use) || use, _temp5;
		}
	}, (_applyDecoratedDescriptor(_obj, "store", [_dec3], Object.getOwnPropertyDescriptor(_obj, "store"), _obj), _applyDecoratedDescriptor(_obj, "scope", [_dec4], Object.getOwnPropertyDescriptor(_obj, "scope"), _obj), _applyDecoratedDescriptor(_obj, "ref", [_dec5], Object.getOwnPropertyDescriptor(_obj, "ref"), _obj), _applyDecoratedDescriptor(_obj, "stateMap", [_dec6], Object.getOwnPropertyDescriptor(_obj, "stateMap"), _obj)), _obj));
	
	exports.default = Lib;
	module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react-rescope");

/***/ })
/******/ ]);
//# sourceMappingURL=rescopeSpells.js.map