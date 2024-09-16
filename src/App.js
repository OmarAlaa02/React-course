
import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


function App() {

  const [list,setList]=useState([]);

  const handleChange=(newItem)=>{
    setList(curList => [...curList,newItem]);
    console.log(list);
  }

  const onDeleteElement=(id)=>{
    setList(curList =>curList.filter(item => item.id !== id));
  }

  const onClearClicked=()=>{
    setList([]);
  }

  return <div className="app">
    <Logo />
    <Form func={handleChange}/>
    <PackingList initialItems={list} onDeleteElement={onDeleteElement} onClearClicked={onClearClicked} />
    <Stats />
  </div>
}

export default App;
