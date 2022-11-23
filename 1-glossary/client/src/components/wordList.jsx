// import react from react
import React from "react";
// import word function
import { useState } from "react";
import Words from "./words.jsx";


// create WordList Function
const WordList = ({ words }) => {
  return (
    <div>
      <h3>My Words</h3>
      <div>
        {words.map((word, index) => {
          return <Words key={index} word={word}/>
        })}
      </div>
    </div>
  )
  // div
    // generate each word

}


// export WordList
export default WordList;