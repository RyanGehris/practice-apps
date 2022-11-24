import React from "react";
// improt useState from react
import { useState } from "react";

// create SearchWord function
const SearchWord = ({ searchWord }) => {
  const [word, setWord] = useState('')

  const eventHandler = (e) => {
    e.preventDefault()
    searchWord(word);
  }

  return (
    <div>
      <form onSubmit={eventHandler}>
        <div>
          <label>Search Word</label>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}>
          </input>
        </div>
        <div>
          <input type="submit" value="Search"></input>
        </div>
      </form>
    </div>
  )
  // create from for entering a word
  // button for submitting word
}

// export function
export default SearchWord;