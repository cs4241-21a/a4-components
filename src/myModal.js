import { useState, useRef } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root")

export default function MyModal( {callbackMethod, callbackPrompt, resp} ) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    // use references to get inputs
    const nameRef = useRef()
    const dislikeRef = useRef()
    const starterRef = useRef()
    const icreamRef = useRef()

    let preloadName, preloadDislike, preloadStarter, preloadIcream = null
    if (resp !== undefined){
      preloadName = resp.name
      preloadDislike = resp.dislike
      preloadStarter = resp.starter
      preloadIcream = resp.icream
    }

    function handleOpenModel() {
      setModalIsOpen(true)
    }
    
    function handleSubmit(event){
      event.preventDefault();
      if(resp === undefined) {
        callbackMethod(nameRef.current.value, dislikeRef.current.value, starterRef.current.value, icreamRef.current.value)
      }
      else {
        callbackMethod(resp.id, nameRef.current.value, dislikeRef.current.value, starterRef.current.value, icreamRef.current.value)
      }
      setModalIsOpen(false)
    }

    return (
    <div className='modal'>
        <button className='button' onClick={handleOpenModel}>{callbackPrompt}</button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <h2>{callbackPrompt}</h2> <br/>
          <form onSubmit={handleSubmit}>
            <label>1) Name? </label><br/>
            <input ref={nameRef} type="text" defaultValue={preloadName} required></input><br/> <br/>

            <label>2) Least favorite language when designing a webpage?</label><br/>
            <select ref={dislikeRef} name="dislike" defaultValue={preloadDislike}>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JS">JS</option>
            </select> <br/> <br/>
            
            <label>3) Favorite Sinnoh Starter?</label><br/>
            <select ref={starterRef} name="starter" defaultValue={preloadStarter}>
              <option value="Turtwig">Turtwig</option>
              <option value="Chimchar">Chimchar</option>
              <option value="Piplup">Piplup</option>
            </select> <br/> <br/>

            <label>4) Preferred ice cream flavor?</label> <br/>
            <select ref={icreamRef} name="icream" defaultValue={preloadIcream}>
              <option value="Vanilla">Vanilla</option>
              <option value="Chocolate">Chocolate</option>
            </select> <br/> <br/>

            <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
    </div>
    )
}