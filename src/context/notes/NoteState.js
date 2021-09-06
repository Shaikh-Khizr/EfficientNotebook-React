import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const initialNotes = [
        {
          "_id": "613476453ffc6e03203f05f8",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-05T07:48:21.945Z",
          "__v": 0
        },
        {
          "_id": "6134b7e4f0495c271e483649",
          "user": "613367e8bf0095a75a3e7db9",
          "title": "New Note",
          "description": "Please access the REACT playlist",
          "tag": "YouTube",
          "date": "2021-09-05T12:28:20.445Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(initialNotes);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;