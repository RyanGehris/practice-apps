// import react from react
import React from "react";
// import useState from react
import { useState } from "react";
import axios from "axios";

// create Word function
const Words = ({ word, setWords }) => {


  // delete word
  const deleteWord = (id) => {
    console.log(id)
    // use delete to remove word from DB
    axios.post('/glossary', {_id: id})
      // upon success, get words and set state
      .then(() => axios.get('/glossary'))
      // fail let user know
      .then((response) => setWords(response.data))
      .catch((error) => {
        console.log(error);
        alert('Failed')
      });
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
    deleteWord(word._id)
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