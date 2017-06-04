(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/404/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_React$Component) {
	_inherits(NotFound, _React$Component);

	function NotFound() {
		_classCallCheck(this, NotFound);

		return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
	}

	_createClass(NotFound, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'404 Not Found'
			);
		}
	}]);

	return NotFound;
}(_react2.default.Component);

exports.default = NotFound;

});

require.register("components/header-nav/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderNav = function (_React$Component) {
    _inherits(HeaderNav, _React$Component);

    function HeaderNav(props) {
        _classCallCheck(this, HeaderNav);

        var _this = _possibleConstructorReturn(this, (HeaderNav.__proto__ || Object.getPrototypeOf(HeaderNav)).call(this, props));

        _this.state = {
            username: props.username
        };
        return _this;
    }

    _createClass(HeaderNav, [{
        key: 'getLoginElem',
        value: function getLoginElem() {
            if (this.props.loggedIn) {
                var week = _util2.default.weekOfYear();
                var thisYear = new Date().getFullYear();
                var thisWeek = thisYear + "-" + week;
                var nextWeek = thisYear + "-" + Number(week + 1);

                return _react2.default.createElement(
                    'div',
                    { className: 'dropdown' },
                    _react2.default.createElement(
                        'a',
                        { className: 'dropdown-toggle', type: 'button', id: 'dropdownMenu1', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
                        _react2.default.createElement(
                            'span',
                            null,
                            this.state.username
                        ),
                        _react2.default.createElement('span', { className: 'caret' })
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu1' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '/home' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: "week/" + thisWeek },
                                'This Week'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: "week/" + nextWeek },
                                'Next Week'
                            )
                        ),
                        _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '/auth/logout' },
                                'Log Out'
                            )
                        )
                    )
                );
            } else {
                return _react2.default.createElement(
                    'a',
                    { href: '/auth/google' },
                    'Log in with Google'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'header-nav' },
                _react2.default.createElement(
                    'a',
                    { href: '/home' },
                    'When Can You Game?'
                ),
                this.getLoginElem()
            );
        }
    }]);

    return HeaderNav;
}(_react2.default.Component);

exports.default = HeaderNav;

});

require.register("components/home/calendar.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var minDate = new Date(2017, 0, 1);

var Calendar = function (_React$Component) {
    _inherits(Calendar, _React$Component);

    function Calendar(props) {
        _classCallCheck(this, Calendar);

        return _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));
    }

    _createClass(Calendar, [{
        key: 'weeks',
        value: function weeks(year) {
            var weeks = [];
            var week = _util2.default.weekOfYear();
            var freshClass = "fresh";
            var className = "";
            var name = "";

            for (var i = 1; i <= 52; i++) {
                className = "";

                if (i === week) {
                    name = "This Week";
                    className += "this-week";
                } else if (i + 1 === week) {
                    name = "Last Week";
                } else if (i - 1 === week) {
                    name = "Next Week";
                } else {
                    name = "Week " + i;
                }

                if (i >= week && year === new Date().getFullYear()) {
                    className += className.length > 0 ? " " + freshClass : freshClass;
                }

                weeks.push(_react2.default.createElement(
                    'a',
                    { href: "week/" + year + "-" + i, key: "Week-" + i, className: className },
                    name
                ));
            }

            return _react2.default.createElement(
                'div',
                { className: 'weeks container-fluid' },
                weeks
            );
        }
    }, {
        key: 'year',
        value: function year() {
            var years = [];
            var thisYear = new Date().getFullYear();
            var minYear = minDate.getFullYear();
            var diff = thisYear - minYear;
            var year = void 0;

            for (var i = diff; i >= 0; i--) {
                year = minYear + i;
                years.push(_react2.default.createElement(
                    'div',
                    { key: year },
                    _react2.default.createElement(
                        'h2',
                        null,
                        year
                    ),
                    this.weeks(year)
                ));
            }

            return _react2.default.createElement(
                'div',
                { className: 'year' },
                years
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var week = _util2.default.weekOfYear();
            var thisYear = new Date().getFullYear();
            var thisWeek = thisYear + "-" + week;
            var nextWeek = thisYear + "-" + Number(week + 1);

            return _react2.default.createElement(
                'div',
                { className: 'calendar' },
                _react2.default.createElement(
                    'div',
                    { className: 'well well-lg' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'When Can You Game?'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Select a week to let us know when you\'re available'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'header-weeks' },
                        _react2.default.createElement(
                            'a',
                            { className: 'btn btn-primary', href: "week/" + thisWeek },
                            'This Week'
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'btn btn-primary', href: "week/" + nextWeek },
                            'Next Week'
                        )
                    )
                ),
                this.year()
            );
        }
    }]);

    return Calendar;
}(_react2.default.Component);

exports.default = Calendar;

});

require.register("components/home/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'home' },
				_react2.default.createElement(_calendar2.default, null)
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

});

require.register("components/week/index.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socket = (0, _socket2.default)();

var Week = function (_React$Component) {
	_inherits(Week, _React$Component);

	function Week(props) {
		_classCallCheck(this, Week);

		var param = window.location.href.slice(window.location.href.lastIndexOf("/") + 1).split("-");

		var _this = _possibleConstructorReturn(this, (Week.__proto__ || Object.getPrototypeOf(Week)).call(this, props));

		_this.state = {
			year: Number(param[0]),
			week: Number(param[1]),
			weekData: null,
			danger: false
		};
		_this.getWeekData();
		socket.on('receive player', function (data) {
			_this.setState(function () {
				return {
					weekData: data
				};
			});
		});
		return _this;
	}

	_createClass(Week, [{
		key: 'getWeekData',
		value: function getWeekData() {
			var _this2 = this;

			$.get('/db/week/' + this.state.week, function (data) {
				_this2.setState(function () {
					return {
						weekData: data
					};
				});
			});
		}
	}, {
		key: 'clickDay',
		value: function clickDay(e, name) {
			var _this3 = this;

			if (this.props.loggedIn) {
				name = name.toLowerCase();
				$.post('/db/update/' + this.state.week + '/player', { day: name }, function (data) {
					socket.emit('player event', data);
					_this3.setState(function () {
						return {
							weekData: data
						};
					});
				});
			} else {
				this.setState(function () {
					return {
						danger: true
					};
				});
			}
		}
	}, {
		key: 'days',
		value: function days() {
			var _this4 = this;

			var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var days = names.map(function (name) {
				var players = [];
				var className = "day clearfix";
				if (_this4.state.weekData) {
					players = _this4.state.weekData[name.toLowerCase()].map(function (player) {
						return _react2.default.createElement(Player, { player: player, key: player.id });
					});
				}
				className += _this4.props.loggedIn ? " clickable" : "";
				return _react2.default.createElement(
					'div',
					{ className: className, key: name, onClick: function onClick(e) {
							return _this4.clickDay(e, name);
						} },
					_react2.default.createElement(
						'div',
						{ className: 'day-title' },
						name
					),
					_react2.default.createElement(
						'div',
						{ className: 'players' },
						players
					)
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'days' },
				days
			);
		}
	}, {
		key: 'getWeekName',
		value: function getWeekName() {
			var standardStr = "Week " + this.state.week + " of " + this.state.year;

			if (new Date().getFullYear() === this.state.year) {
				var week = this.state.week;
				var weekOfYear = _util2.default.weekOfYear();

				if (week === weekOfYear) {
					return "This Week";
				} else if (week + 1 === weekOfYear) {
					return "Last Week";
				} else if (week - 1 === weekOfYear) {
					return "Next Week";
				} else {
					return standardStr;
				}
			} else {
				return standardStr;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var title = this.getWeekName();
			var h3Class = this.state.danger ? "alert-danger" : "alert-warning";

			return _react2.default.createElement(
				'div',
				{ id: 'week' },
				_react2.default.createElement(
					'h2',
					null,
					title
				),
				_react2.default.createElement(
					'h3',
					{ className: this.props.loggedIn ? "" : "alert " + h3Class },
					this.props.loggedIn ? 'Select the days that work for you! Select again to toggle "maybe" or remove yourself.' : 'Log in to mark your availability'
				),
				this.days(),
				_react2.default.createElement(
					'h6',
					null,
					'Hover over an image to see their name.'
				)
			);
		}
	}]);

	return Week;
}(_react2.default.Component);

exports.default = Week;

var Player = function (_React$Component2) {
	_inherits(Player, _React$Component2);

	function Player(props) {
		_classCallCheck(this, Player);

		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
	}

	_createClass(Player, [{
		key: 'render',
		value: function render() {
			var maybe = this.props.player.maybe ? " maybe" : "";

			return _react2.default.createElement(
				'div',
				{ className: "player-container" + maybe, key: this.props.player.id },
				_react2.default.createElement('img', { title: this.props.player.name, src: this.props.player.photo })
			);
		}
	}]);

	return Player;
}(_react2.default.Component);

});

require.register("index.js", function(exports, require, module) {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('routes');

var _routes2 = _interopRequireDefault(_routes);

var _headerNav = require('components/header-nav');

var _headerNav2 = _interopRequireDefault(_headerNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

document.addEventListener('DOMContentLoaded', function () {

  $.get('/db/user', function (data) {
    var loggedIn = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object";
    var username = data ? data.google.displayName : '';
    var userID = data ? data.google.id : '';

    _reactDom2.default.render(_react2.default.createElement(
      'div',
      { id: 'app' },
      _react2.default.createElement(_headerNav2.default, { loggedIn: loggedIn, username: username }),
      _react2.default.createElement(_routes2.default, { history: history, loggedIn: loggedIn, userID: userID })
    ), document.querySelector('#root'));
  });
});

});

require.register("routes.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _home = require('components/home');

var _home2 = _interopRequireDefault(_home);

var _week = require('components/week');

var _week2 = _interopRequireDefault(_week);

var _ = require('components/404');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes(props) {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        props,
        _react2.default.createElement(
            'div',
            { className: 'main-content' },
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render() {
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/home', render: function render() {
                        return _react2.default.createElement(_home2.default, { loggedIn: props.loggedIn });
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/week', render: function render() {
                        return _react2.default.createElement(_week2.default, { loggedIn: props.loggedIn, userID: props.userID });
                    } }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _2.default })
            )
        )
    );
};

exports.default = Routes;

});

require.register("util.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Util = {

    weekOfYear: function weekOfYear() {
        var now = new Date();
        var thisYear = now.getFullYear();
        var start = new Date(thisYear, 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        var week = Math.ceil(day / 7);
        return week;
    }

};

exports.default = Util;

});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  

// Auto-loaded modules from config.npm.globals.
window.jQuery = require("jquery");
window["$"] = require("jquery");
window.bootstrap = require("bootstrap");


});})();require('___globals___');


//# sourceMappingURL=app.js.map