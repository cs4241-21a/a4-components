import classes from "./TableItem.module.css";

function TableItem(props) {
  return (
    <tr onClick={() => props.show(props.item._id)} className={classes.itemRow}>
      <td className="text-center">{props.index}</td>
      <td className="text-center">{props.item.name}</td>
      <td className="text-center">{props.item.email}</td>
      <td className="text-center">{props.item.number}</td>
      <td className="text-center">{props.item.age}</td>
      <td className="text-center">{props.item.occupation}</td>
      <td className="text-center">{props.item.age_group}</td>
      <td className="text-center">{props.item.education_level}</td>
      <td className="text-center">{props.item.notes}</td>
    </tr>
  );
}
export default TableItem;
