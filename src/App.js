
import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


function App() {

  const [list,setList]=useState([]);
  console.log('rendered');
  const handleChange=(newItem)=>{
    setList(curList => [...curList,newItem]);
  }

  const onDeleteElement=(id)=>{
    setList(curList =>curList.filter(item => item.id !== id));
  }

  const onClearClicked=()=>{
    const confirmed = window.confirm('Are you sure ??');

    if(confirmed)
      setList([]);
  }

  const onUpdateChecked=(id)=>{
    setList(curList => curList.map(item => item.id === id ? {...item,packed:!(item.packed)}:item));
    console.log(list);
  }

  return <div className="app">
    <Logo />
    <Form func={handleChange}/>
    <PackingList initialItems={list} onDeleteElement={onDeleteElement} onClearClicked={onClearClicked} onUpdateChecked={onUpdateChecked} />
    <Stats items={list}/>
  </div>
}

export default App;
