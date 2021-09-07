import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const initialNotes = [
        {
          "_id": "613476453fffc6e5603203f05f8",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-05T07:48:21.945Z",
          "__v": 0
        },
        {
          "_id": "6134b7e20d4f0495c271e483649",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "New Note",
          "description": "Please access the REACT playlist",
          "tag": "YouTube",
          "date": "2021-09-05T12:28:20.445Z",
          "__v": 0
        },
        {
          "_id": "61347264253ffc6e03203f05f8",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-05T07:48:21.945Z",
          "__v": 0
        },
        {
          "_id": "6134b7ee4f04595c271e483649",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "New Note",
          "description": "Please access the REACT playlist",
          "tag": "YouTube",
          "date": "2021-09-05T12:28:20.445Z",
          "__v": 0
        },
        {
          "_id": "6134764r53ffc66e03203f05f8",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-05T07:48:21.945Z",
          "__v": 0
        },
        {
          "_id": "6134b7e2g4f0495c271e483649",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "New Note",
          "description": "Please access the REACT playlist",
          "tag": "YouTube",
          "date": "2021-09-05T12:28:20.445Z",
          "__v": 0
        },
        {
          "_id": "6134f76453ffc6e0453203f05f8",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-05T07:48:21.945Z",
          "__v": 0
        },
        {
          "_id": "6s134b765e4f0495c271e483649",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "New Note",
          "description": "Please access the REACT playlist",
          "tag": "YouTube",
          "date": "2021-09-05T12:28:20.445Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(initialNotes);

      // Add a Note
      const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note");
        const note = {
          "_id": "6s134b765e4f2d0495c4271e483649",
          "user": "613367e8bf0095a75a3e7db93",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-05T12:28:20.445Z",
          "__v": 0
        };
        setNotes(notes.concat(note));
      }

      // Edit a Note
      const eidtNote = () => {
        
      }

      // Delete a Note
      const deleteNote = () => {
        
      }


    return (
        <NoteContext.Provider value={{notes, addNote, eidtNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;