import React, {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import my_notes from "./Data"
import CreateNote from "./CreateNote";
function App() 
{
  const [allnotes, setNotes] = useState([]);
  function addNote(note)
  {
     setNotes (lastNotes =>{
    return [...lastNotes, note]
   })
   
  }
  function deleteMyNote(id){
         setNotes(lastNotes =>{
          return lastNotes.filter((singleNote,index) =>{
            return index !== id;
          })
         })
  }
return(
  <div>
 <Header/>
 <CreateNote onAdd = {addNote} />

 {allnotes.map ((singleNote, index) => {
      return <Note
                  id = {index}
                  title = {singleNote.title}
                  content = {singleNote.content} 
                  onDelete = {deleteMyNote} />

 })}

 
 <Footer/>
 </div>
)
}

export default App;
