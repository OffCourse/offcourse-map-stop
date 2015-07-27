"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var Point = (function (_React$Component) {
  function Point(props) {
    _classCallCheck(this, Point);

    _get(Object.getPrototypeOf(Point.prototype), "constructor", this).call(this, props);
    this.name = "point";
  }

  _inherits(Point, _React$Component);

  _createClass(Point, [{
    key: "classes",
    value: function classes() {
      var _classnames;

      var _props = this.props;
      var complete = _props.complete;
      var highlight = _props.highlight;

      var highlightClass = this.name + "-is-highlight";
      var completeClass = this.name + "-is-complete";
      return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, this.name, true), _defineProperty(_classnames, highlightClass, highlight), _defineProperty(_classnames, completeClass, complete), _classnames));
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var cx = _props2.cx;
      var cy = _props2.cy;
      var strokeWidth = _props2.strokeWidth;
      var id = _props2.id;
      var handleHover = _props2.handleHover;
      var handleClick = _props2.handleClick;

      var pointRadius = strokeWidth * 2;

      return _react2["default"].createElement("circle", { cx: cx,
        cy: cy,
        r: pointRadius,
        strokeWidth: strokeWidth,
        onMouseEnter: handleHover.bind(this, id, true),
        onMouseLeave: handleHover.bind(this, id, false),
        onClick: handleClick.bind(this, id),
        className: this.classes() });
    }
  }], [{
    key: "propTypes",
    value: {
      id: _react.PropTypes.string.isRequired,
      cx: _react.PropTypes.number.isRequired,
      cy: _react.PropTypes.number.isRequired,
      strokeWidth: _react.PropTypes.number.isRequired,
      complete: _react.PropTypes.bool,
      highlight: _react.PropTypes.bool,
      handleHover: _react.PropTypes.func.isRequired,
      handleClick: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      strokeWidth: 2,
      handleHover: function handleHover() {},
      handleClick: function handleClick() {}
    },
    enumerable: true
  }]);

  return Point;
})(_react2["default"].Component);

exports["default"] = Point;
module.exports = exports["default"];