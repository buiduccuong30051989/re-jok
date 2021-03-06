var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledCardContent, StyledCardContentTitle, StyledCardContentSubTitle } from './style';

import { isChild } from '../helpers/typeUtils';

var CardContent = function (_React$Component) {
  _inherits(CardContent, _React$Component);

  function CardContent() {
    _classCallCheck(this, CardContent);

    return _possibleConstructorReturn(this, (CardContent.__proto__ || Object.getPrototypeOf(CardContent)).apply(this, arguments));
  }

  _createClass(CardContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          subtitle = _props.subtitle,
          rest = _objectWithoutProperties(_props, ['children', 'title', 'subtitle']);

      var hasChild = !isChild(children);

      return React.createElement(
        StyledCardContent,
        rest,
        title && React.createElement(
          StyledCardContentTitle,
          null,
          title
        ),
        subtitle && React.createElement(
          StyledCardContentSubTitle,
          null,
          subtitle
        ),
        hasChild && children
      );
    }
  }]);

  return CardContent;
}(React.Component);

CardContent._meta = {
  name: 'CardContent',
  parent: 'Card'
};


export default CardContent;