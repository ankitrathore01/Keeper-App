import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [notes,setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteitem,index) =>{
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea onadd = {addNote} /> 
      {notes.map((noteitem,index) => {
       return <Note id = {index} key = {index} title= {noteitem.title} content={noteitem.content} ondelete = {deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
