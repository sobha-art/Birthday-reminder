import React, {useState} from 'react';
import './App.css';
import List from './List';
import data from './data';

function App() {
  const [People, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
      <h3>{People.length} Birthday Todays</h3>
      <List People={People}/>
      <button onClick = {()=>setPeople([ ])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
