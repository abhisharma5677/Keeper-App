import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import notes from './notes'
import InputArea from './InputArea'



const App = () => {
  const[noteArray , setNoteArray] = useState([]);

  function addNote(newNote){
    setNoteArray(preValue => {
      return [...preValue , newNote]
    });
  }

  return (
    <div>
      <Header />

      <InputArea onAdd = {addNote} />

      <div className='Container'>
        {noteArray.map((detail) => {
          return (
            <Notes
              title={detail.title}
              content={detail.content}
            />
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default App
