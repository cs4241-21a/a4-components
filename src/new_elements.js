'use strict';

function NormalSentence(props) {
    return <p>{props.name} said: "{props.message}"</p>;
}

function OwOSentence(props) {
    return <p>{props.nameowo} said: "{props.messageowo}"</p>;
}

function NormalRow(props) {
    return <tr><td>{props.name}</td><td>{props.message}</td></tr>
}

function OwORow(props) {
    return <tr><td>{props.nameowo}</td><td>{props.messageowo}</td></tr>
}

class OwOTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
                {this.props.appdata.map((elt) =>
                    OwORow(elt))}
            </thead>
        </table>;
    }
}

class NormalTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
                {this.props.appdata.map((elt) =>
                    NormalRow(elt))}
            </thead>
        </table>;
    }
}

class OwOParagraphs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return <div>
            {this.props.appdata.map((elt) =>
                OwOSentence(elt))}
        </div>;
    }
}

class NormalParagraphs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { children: [] };
    }

    render() {
        return <div>
            {this.props.appdata.map((elt) =>
                NormalSentence(elt))}
        </div>;
    }
}

class ParentElement extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        appdata: []
    }

    componentDidMount = () => {
        let that = this;
        fetch('/getAppdata', {
            method: 'GET',
        }).then(function (response) {
            response.text().then(function (jsonData) {
                console.log(jsonData)
                let appdata = JSON.parse(jsonData);
                that.setState({ appdata: appdata })
            })
        })
    }

    submit() {
        // prevent default form action from being carried out
        const nameText = document.getElementById('name');
        const targetText = document.getElementById('target-text');
        let json = {
            name: nameText.value,
            message: targetText.value
        };
        let body = JSON.stringify(json);
        let that = this;

        fetch('/submit', {
            method: 'POST',
            body
        })
            .then(function (response) {
                // do something with the reponse 
                response.text().then(function (str) {
                    that.setState((prevstate, props) => {
                        appdata: prevstate.appdata.push(JSON.parse(str));
                    })
                })
            })
    }

    render() {
        return <div>
            <button onClick={() => this.submit()}>submit</button>
            <div id='table-root' class='root'>
                <div>
                    <b>Normal Table</b>
                    <NormalTable appdata={this.state.appdata} />
                </div>
                <div>
                    <b>OwO-ified Table</b>
                    <OwOTable appdata={this.state.appdata} />
                </div>
            </div>
            <div id='sentence-root' class='root'>
                <div id='normal-sentence-root'>
                    <b>Normal Sentences</b>
                    <NormalParagraphs appdata={this.state.appdata} />
                </div>
                <div id='owo-sentence-root'>
                    <b>OwO-ified Sentences</b>
                    <OwOParagraphs appdata={this.state.appdata} />
                </div>
            </div>
        </div>
    }
}
