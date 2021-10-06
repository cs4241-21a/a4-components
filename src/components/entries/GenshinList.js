import GenshinCharacter from './GenshinCharacter'
import classes from './GenshinList.module.css'

function GenshinList(props) {
  return (
    <ul className={classes.list}>
      {props.chars.map((char) => (
        <GenshinCharacter
          key={char.id}
          id={char.id}
          name={char.name}
          element={char.element}
          level={char.level}
          stars={char.stars}
          description={char.description}
        />
      ))}
    </ul>
  )
}

export default GenshinList
