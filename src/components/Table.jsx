import React from "react";
import Calories from "./Calories";
import Tablerow from "./Tablerow"

class Table extends React.Component{

    getCal = () => this.props.tablecal() 
    edit = (index) => this.props.edit(index)
    delete = (index) => this.props.delete(index)

    render(){
        return (
        <>
        <h2>{this.props.title}</h2>
        <Calories value={this.getCal()}/>
        <table className='myTable'>
            <thead>
                <tr>
                    <th>{this.props.col1}</th>
                    <th>{this.props.col2}</th>
                    <th>{this.props.col3}</th>
                    <th>{this.props.col4}</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            { this.props.entries.map( (entry, id) => <Tablerow key={id} index={id} edit={this.edit} delete={this.delete}
                                                        name={entry.fname} cal={entry.cal} serv={entry.serv} tcal={entry.tcal} /> )}
            </tbody>
        </table>
        </>
        );
    }
}

export default Table