import React from "react";
// improt useState from react
import { useState } from "react";

// create SearchWord function
const SearchWord = () => {
  return (
    <div>
      <form>
        <div>
          <label>Search Word</label>
          <input type="text" required></input>
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