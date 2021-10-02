import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './App.css';
import MyModal from './myModal';
import ResponseList from './ResponseList';

const LOCAL_STORAGE_KEY = 'pollApp.responses'

function App() {

  // app deals with poll responses. We set and store responses
  const [responses, setResponses] =  useState([]) 

  // when loading page, retrieve storage
  useEffect(() => {
    const storedResponses = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setResponses(storedResponses)
  }, [])

  // save responses when they are modified
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(responses))
  }, [responses])

  // add response handler
  function handleAddResponse(respName, respDislike, respStarter, respIcream) {
    console.log(respName, respDislike, respStarter, respIcream)
    setResponses(prevResponses => {
      return [...prevResponses, {id: uuid(), name: respName, dislike: respDislike, starter: respStarter, icream: respIcream}]
    })
  }

  // delete response handler
  function handleDeleteResponse(id) {
    console.log(id)
    const prevResponses = [...responses]
    const filteredResponses = prevResponses.filter(function( resp ) {
      return resp.id !== id;
    });
    setResponses(filteredResponses)
  }

  // update response handle
  function handleUpdateResponse(id, respName, respDislike, respStarter, respIcream) {
    const newResponses = [...responses]
    const resp = newResponses.find(resp => resp.id === id)
    resp.name = respName
    resp.dislike = respDislike
    resp.starter = respStarter
    resp.icream = respIcream
    setResponses(newResponses)
  }

  return (
    <>
      <h1>College Student Survey</h1> <br/>
      <MyModal callbackMethod={handleAddResponse} callbackPrompt={"Add Response"}/>
      <table className='content-table'>
        <thead>
          <tr>
           <th>Name</th> 
           <th>Dislikes</th>
           <th>Starter</th>
           <th>Prefers</th>
           <th></th>
           <th></th>
          </tr>
        </thead>
        <tbody>
          <ResponseList responses={responses} deleteCallback={handleDeleteResponse} updateCallback={handleUpdateResponse}/>
        </tbody>
      </table>
    </>
    );
}

export default App;
