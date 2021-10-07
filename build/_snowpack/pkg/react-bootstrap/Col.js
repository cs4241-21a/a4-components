import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault, T as ThemeProvider_1 } from '../common/ThemeProvider-7344c673.js';
import { c as classnames, j as jsxRuntime } from '../common/jsx-runtime-c629b82b.js';
import { r as react } from '../common/index-04edb6a1.js';

var Col_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.useCol = useCol;
exports.default = void 0;

var _classnames = interopRequireDefault(classnames);

var React = _interopRequireWildcard(react);





function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DEVICE_SIZES = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'col');
  const spans = [];
  const classes = [];
  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: (0, _classnames.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}

const Col = /*#__PURE__*/React.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(Component, { ...colProps,
    ref: ref,
    className: (0, _classnames.default)(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
var _default = Col;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Col_1);

export default __pika_web_default_export_for_treeshaking__;
