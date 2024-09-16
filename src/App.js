
import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


function App() {

  const [list,setList]=useState([
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 12, packed: false }
  ]);

  const handleChange=(newItem)=>{
    setList(curList => curList.concat(newItem));
    console.log(list);
  }

  return <div className="app">
    <Logo />
    <Form func={handleChange}/>
    <PackingList initialItems={list} />
    <Stats />
  </div>
}

export default App;
