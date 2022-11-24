// import react from react
import React from "react";
// import useState from react
import { useState } from "react";


// create AddWord function
const AddWord = ({ addWord }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    addWord(word, definition);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Word</label>
          <input
            type="text"
            value={word}
            required
            onChange={(e) => setWord(e.target.value)}>
          </input>
        </div>
        <div>
          <label>Definition</label>
          <input
            type="text"
            value={definition}
            required
            onChange={(e) => setDefinition(e.target.value)}>
          </input>
        </div>
        <div>
          <input type="submit" value="Save"></input>
        </div>
      </form>
    </div>
  )
  // set state

  // form for entering word and definition
  // button for submitting

}

// export AddWord function
export default AddWord;