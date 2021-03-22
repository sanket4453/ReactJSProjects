import "./styles.css";
import { useState } from "react";
import Data from './Data'
import List from './List'

export default function App() {
  const [person,setPerson] = useState(Data);

  const clearData = () =>{
    setPerson([]);
  }

  return (
    <main>
    <section className="container">
      <h3>{person.length} Birthday Today</h3>
     
      <List person={person}/>
      <button onClick={clearData}>Clear All</button>
    </section>
    </main>
  );
}
