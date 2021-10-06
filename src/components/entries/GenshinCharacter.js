
import Card from '../ui/Card'
import classes from './GenshinCharacter.module.css'

function GenshinCharacter(props) {

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>Element: {props.element}</p>
          <p>Level: {props.level}</p>
          <p>Stars: {props.stars}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  )
}

export default GenshinCharacter
