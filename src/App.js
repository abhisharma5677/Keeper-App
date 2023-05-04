import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Notes from './Notes'
import notes from './notes'



const App = () => {
  return (
    <div>
      <Header />

      {notes.map( (detail) =>{
        return (
          <Notes 
            key = {detail.key}
            title = {detail.title}
            content = {detail.content}
           />
        )
      } )}

      <Footer />
    </div>
  )
}

export default App
