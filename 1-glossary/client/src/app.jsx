import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
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
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState('');

  // useEffect(/**callback */)
  useEffect(() => {
    axios.get('/glossary')
      .then((result) => setWords(result.data))
      .catch((err) => alert('error'))
  }, [])

  // addWord function
  const addWord = (word, definition) => {
    const newWord = { word: word, definition: definition};
    axios.post('/glossary', newWord)
      .then(() => axios.get('/glossary'))
      .then((response) => setWords(response.data))
      .catch((error) => alert('FAILED'));
  }

  // search word function
  const searchWord = (word) => {
    console.log('Searched word: ', word);
    setFilter(word);
  }

  return (
    <div>
      <h1>Glossary App</h1>
      <AddWord addWord={addWord}/>
      <SearchWord searchWord={searchWord}/>
      <WordList words={words} filter={filter} setWords={setWords}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
