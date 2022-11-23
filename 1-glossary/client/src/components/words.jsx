// import react from react
import React from "react";
// import useState from react
import { useState } from "react";

// create Word function
const Words = ({ word }) => {
  return (
    <div>
      <div>
        {`${word.word}: ${word.definition}`}
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
  // div
     // div with word and definition
     // edit button
     // delete button
}

// export Word function
export default Words;