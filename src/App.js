import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';
function Mbutton() {
  const [count, setCount] = useState(0);
  function doMagic () {
    setCount(count + 1);
  }
  return (
    <>
    <h2>The Magic Button</h2>
    <button onClick={doMagic}>M {count}</button>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Andrew and MSU
        </a>
        <Mbutton />
      </header>
    </div>
  );
}

function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: Books, error } = await supabase
      .from('Books')
      .select('*')
    // Update the state
    setMyBooks(Books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

export default App;
