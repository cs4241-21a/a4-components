import { useHistory } from 'react-router-dom'
import GenshinForm from '../components/entries/GenshinForm'

function AddPage() {
  const history = useHistory()
  function addCharacterHandler(characterData) {
    fetch(
      'https://a4-components-default-rtdb.firebaseio.com/characters.json',
      {
        method: 'POST',
        body: JSON.stringify(characterData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>Add New Character</h1>
      <GenshinForm onAddChar={addCharacterHandler} />
    </section>
  )
}

export default AddPage