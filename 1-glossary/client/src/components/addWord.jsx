// import react from react
import React from "react";
// import useState from react
import { useState } from "react";


// create AddWord function
const AddWord = () => {
  return (
    <div>
      <form>
        <div>
          <label>New Word</label>
          <input type="text" required></input>
        </div>
        <div>
          <label>Definition</label>
          <input type="text" required></input>
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