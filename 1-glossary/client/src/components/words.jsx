// import react from react
import React from "react";
// import useState from react
import { useState } from "react";

// create Word function
const Words = ({ word }) => {


  // delete word
  const deleteWord = (id) => {
    // use delete to remove word from DB
    axios.delete('/glossary', {id: id})
    // upon success, get words and set state
    .then(() => axios.get('/glossary'))
    // fail let user know
    .then((response) => setWords(response.data))
    .catch((error) => alert('Failed'));
  }

  // edit word
  const editWord = (id, word, definition) => {
    const information = { old: { id: id }, replace: { word: word, definition: definition } }
    console.log(information);
    // // edit word in DB using patch
    // axios.patch('/glossary', information)
    // // upon success setState with new words
    //   .then(() => axios.get('/glossary'))
    //   .then((response) => setWords(response.data))
    //   // if failed notify user
    //   .catch((error) => alert('FAILED'));
  }

  const handleDelete = (e) => {
    e.preventDefault()
    console.log(word.word);
    //deleteWord(word.id)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    const newWord = prompt('Enter new word')
    const newDef = prompt('Enter new definition')
    editWord(word.word, newWord, newDef);
  }
  return (
    <div>
      <div>
        {`${word.word}: ${word.definition}`}
        <button
          onClick={handleEdit}>
          Edit
        </button>
        <button
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

// export Word function
export default Words;