// import react from react
import React from "react";
// import word function
import { useState } from "react";
import Words from "./words.jsx";


// create WordList Function
const WordList = ({ words, filter, setWords }) => {
  return (
    <div>
      <h3>My Words</h3>
      <div>
        {words.map((word, index) => {
          if (word.word.toLowerCase().includes(filter.toLowerCase())) {
            return <Words key={index} word={word} setWords={setWords}/>
          }
        })}
      </div>
    </div>
  )
}


// export WordList
export default WordList;