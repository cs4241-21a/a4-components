'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function NormalSentence(props) {
    return React.createElement(
        'p',
        null,
        props.name,
        ' said: "',
        props.message,
        '"'
    );
}

function OwOSentence(props) {
    return React.createElement(
        'p',
        null,
        props.nameowo,
        ' said: "',
        props.messageowo,
        '"'
    );
}

function NormalRow(props) {
    return React.createElement(
        'tr',
        null,
        React.createElement(
            'td',
            null,
            props.name
        ),
        React.createElement(
            'td',
            null,
            props.message
        )
    );
}

function OwORow(props) {
    return React.createElement(
        'tr',
        null,
        React.createElement(
            'td',
            null,
            props.nameowo
        ),
        React.createElement(
            'td',
            null,
            props.messageowo
        )
    );
}

var OwOTable = function (_React$Component) {
    _inherits(OwOTable, _React$Component);

    function OwOTable(props) {
        _classCallCheck(this, OwOTable);

        return _possibleConstructorReturn(this, (OwOTable.__proto__ || Object.getPrototypeOf(OwOTable)).call(this, props));
    }

    _createClass(OwOTable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'Name'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Message'
                        )
                    ),
                    this.props.appdata.map(function (elt) {
                        return OwORow(elt);
                    })
                )
            );
        }
    }]);

    return OwOTable;
}(React.Component);

var NormalTable = function (_React$Component2) {
    _inherits(NormalTable, _React$Component2);

    function NormalTable(props) {
        _classCallCheck(this, NormalTable);

        return _possibleConstructorReturn(this, (NormalTable.__proto__ || Object.getPrototypeOf(NormalTable)).call(this, props));
    }

    _createClass(NormalTable, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'Name'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Message'
                        )
                    ),
                    this.props.appdata.map(function (elt) {
                        return NormalRow(elt);
                    })
                )
            );
        }
    }]);

    return NormalTable;
}(React.Component);

var OwOParagraphs = function (_React$Component3) {
    _inherits(OwOParagraphs, _React$Component3);

    function OwOParagraphs(props) {
        _classCallCheck(this, OwOParagraphs);

        return _possibleConstructorReturn(this, (OwOParagraphs.__proto__ || Object.getPrototypeOf(OwOParagraphs)).call(this, props));
    }

    _createClass(OwOParagraphs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.appdata.map(function (elt) {
                    return OwOSentence(elt);
                })
            );
        }
    }]);

    return OwOParagraphs;
}(React.Component);

var NormalParagraphs = function (_React$Component4) {
    _inherits(NormalParagraphs, _React$Component4);

    function NormalParagraphs(props) {
        _classCallCheck(this, NormalParagraphs);

        var _this4 = _possibleConstructorReturn(this, (NormalParagraphs.__proto__ || Object.getPrototypeOf(NormalParagraphs)).call(this, props));

        _this4.state = { children: [] };
        return _this4;
    }

    _createClass(NormalParagraphs, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.appdata.map(function (elt) {
                    return NormalSentence(elt);
                })
            );
        }
    }]);

    return NormalParagraphs;
}(React.Component);

var ParentElement = function (_React$Component5) {
    _inherits(ParentElement, _React$Component5);

    function ParentElement(props) {
        _classCallCheck(this, ParentElement);

        var _this5 = _possibleConstructorReturn(this, (ParentElement.__proto__ || Object.getPrototypeOf(ParentElement)).call(this, props));

        _this5.state = {
            appdata: []
        };

        _this5.componentDidMount = function () {
            var that = _this5;
            fetch('/getAppdata', {
                method: 'GET'
            }).then(function (response) {
                response.text().then(function (jsonData) {
                    console.log(jsonData);
                    var appdata = JSON.parse(jsonData);
                    that.setState({ appdata: appdata });
                });
            });
        };

        return _this5;
    }

    _createClass(ParentElement, [{
        key: 'submit',
        value: function submit() {
            // prevent default form action from being carried out
            var nameText = document.getElementById('name');
            var targetText = document.getElementById('target-text');
            var json = {
                name: nameText.value,
                message: targetText.value
            };
            var body = JSON.stringify(json);
            var that = this;

            fetch('/submit', {
                method: 'POST',
                body: body
            }).then(function (response) {
                // do something with the reponse 
                response.text().then(function (str) {
                    that.setState(function (prevstate, props) {
                        appdata: prevstate.appdata.push(JSON.parse(str));
                    });
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this6.submit();
                        } },
                    'submit'
                ),
                React.createElement(
                    'div',
                    { id: 'table-root', 'class': 'root' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'b',
                            null,
                            'Normal Table'
                        ),
                        React.createElement(NormalTable, { appdata: this.state.appdata })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'b',
                            null,
                            'OwO-ified Table'
                        ),
                        React.createElement(OwOTable, { appdata: this.state.appdata })
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'sentence-root', 'class': 'root' },
                    React.createElement(
                        'div',
                        { id: 'normal-sentence-root' },
                        React.createElement(
                            'b',
                            null,
                            'Normal Sentences'
                        ),
                        React.createElement(NormalParagraphs, { appdata: this.state.appdata })
                    ),
                    React.createElement(
                        'div',
                        { id: 'owo-sentence-root' },
                        React.createElement(
                            'b',
                            null,
                            'OwO-ified Sentences'
                        ),
                        React.createElement(OwOParagraphs, { appdata: this.state.appdata })
                    )
                )
            );
        }
    }]);

    return ParentElement;
}(React.Component);