import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault, T as ThemeProvider_1 } from '../common/ThemeProvider-7344c673.js';
import { c as classnames, j as jsxRuntime } from '../common/jsx-runtime-c629b82b.js';
import { r as react } from '../common/index-04edb6a1.js';
import { p as propTypes } from '../common/index-ce016b4a.js';

var Image_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = exports.propTypes = void 0;

var _classnames = interopRequireDefault(classnames);

var React = _interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);





function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const propTypes$1 = {
  /**
   * @default 'img'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Sets image as fluid image.
   */
  fluid: _propTypes.default.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: _propTypes.default.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: _propTypes.default.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: _propTypes.default.bool
};
exports.propTypes = propTypes$1;
const defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
const Image = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  fluid,
  rounded,
  roundedCircle,
  thumbnail,
  ...props
}, ref) => {
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'img');
  return /*#__PURE__*/(0, jsxRuntime.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref,
    ...props,
    className: (0, _classnames.default)(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = 'Image';
Image.defaultProps = defaultProps;
var _default = Image;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Image_1);

export default __pika_web_default_export_for_treeshaking__;
