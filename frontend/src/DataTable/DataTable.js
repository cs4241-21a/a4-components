import { Table } from "react-bootstrap";
import TableItem from "./TableItem";
import classes from "./TableItem.module.css";

function DataTable(props) {
  return (
    <Table striped bordered hover>
      <thead className={classes.header}>
        <tr>
          <th className="text-center">Contact Number</th>
          <th className="text-center">Name</th>
          <th className="text-center">Email</th>
          <th className="text-center">Number</th>
          <th className="text-center">Age</th>
          <th className="text-center">Occupation</th>
          <th className="text-center">Age Group</th>
          <th className="text-center">Education Level</th>
          <th className="text-center">Notes</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <TableItem
              show={props.show}
              hide={props.onHide}
              key={index + 1}
              index={index + 1}
              item={item}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default DataTable;
