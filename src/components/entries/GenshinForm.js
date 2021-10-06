import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './GenshinForm.module.css'

function GenshinForm(props) {
  const nameInputRef = useRef()
  const elementInputRef = useRef()
  const levelInputRef = useRef()
  const starsInputRef = useRef()
  const descriptionInputRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value;
    const enteredElement = elementInputRef.current.value;
    const enteredLevel = levelInputRef.current.value;
    const enteredStars = starsInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const characterData = {
      name: enteredName,
      element: enteredElement,
      level: enteredLevel,
      stars: enteredStars,
      description: enteredDescription,
    }

    props.onAddChar(characterData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Character Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='element'>Character Element</label>
          <input type='text' required id='lement' ref={elementInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='level'>Character Level</label>
          <input type='number' required id='level' ref={levelInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='stars'>Character Stars</label>
          <input type='number' required id='stars' ref={starsInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Character</button>
        </div>
      </form>
    </Card>
  )
}

export default GenshinForm
