import React from 'react'

class Form extends React.Component {
    render(){
        return (
        <form className='myForm'>
            <h2><span>{this.props.title}</span></h2>
            <label for={this.props.idlabel1}>{this.props.label1}</label>
            <input type="text" id={this.props.idlabel1} /><br />
            <label for={this.props.idlabel2}>{this.props.label2}</label>
            <input type="text" id={this.props.idlabel2} /><br />
            <label for={this.props.idlabel3}>{this.props.label3}</label>
            <input type="text" id={this.props.idlabel3} /><br />
            <button onClick={this.props.onClick}>{this.props.namebtn}</button>
            <input type="text" id="secret" style={{display: "none"}}/>
        </form>
        );
    }
}

export default Form

