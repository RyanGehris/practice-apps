import React, { useState } from "react";
import ReactDOM from "react-dom";
import AddWord from "./components/addWord.jsx";
import SearchWord from "./components/searchWord.jsx";
import WordList from "./components/wordList.jsx";



const glossy = [
  {
    word: 'glossary',
    definition: 'an alphabetical list of terms or words found in or relating to a specific subject, text, or dialect, with explanations; a brief dictionary.'
  },
  {
    word: 'application',
    definition: 'the action of putting something into operation OR a formal request to an authority for something.'
  },
  {
    word: 'hack',
    definition: 'cut with rough or heavy blows'
  }
];

const App = () => {
  const [words, setWords] = useState(glossy);

  return (
    <div>
      <h1>Glossary App</h1>
      <AddWord />
      <SearchWord />
      <WordList words={words}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
