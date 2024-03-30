"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MyFormComponent = function MyFormComponent(_ref) {
  var showForm = _ref.showForm;
  if (!showForm) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Enter something..."
  }), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit"
  }, "Submit"));
};
var _default = exports["default"] = MyFormComponent;