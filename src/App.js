import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import notes from './notes'
import InputArea from './InputArea'



const App = () => {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(newNote) {
    setNoteArray(preValue => {
      return [...preValue, newNote]
    });
  }

  function deleteContent(id) {
    setNoteArray(preValue => {
      return preValue.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />

      <InputArea onAdd={addNote} />

      <div className='Container'>
        {noteArray.map((detail, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={detail.title}
              content={detail.content}
              onDelete={deleteContent}
            />
          )
        })}
      </div>

      <Footer />
    </div>
  )
}

export default App
