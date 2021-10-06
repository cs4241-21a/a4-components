import { useState, useEffect } from 'react'
import GenshinList from '../components/entries/GenshinList'
//import GenshinCharacter from '../components/entries/GenshinCharacter'


function MainPage() {

  const [isLoading, setIsLoading] = useState(false)
  const [loadedChars, setLoadedChars] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://a4-components-default-rtdb.firebaseio.com/characters.json'
  )
      .then(response => {
        return response.json()
      })
      .then(data => {
        const chars = []
        
        for (const key in data) {
          const char = {
            id: key,
            ...data[key]
          }
          chars.push(char)
        }

        setIsLoading(false)
        setLoadedChars(chars)
      })
  }, [])
  
  if (isLoading) {
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  // function deleteCharHandler(character) {
  //   fetch(
  //     'https://a4-components-default-rtdb.firebaseio.com/characters.json',
  //     {
  //       method: 'DELETE',
  //       body: JSON.stringify(character),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   )
  // }

  return (
    <section>
      <h1>Genshin Characters</h1>
      {/* <GenshinCharacter onDeleteChar = {deleteCharHandler} /> */}
      <GenshinList chars={loadedChars} />
    </section>
  )
}

export default MainPage