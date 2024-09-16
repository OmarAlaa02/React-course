import { useState } from 'react';
function Form({ func }) {
    const [input,setInput] = useState('');
    const [select,setSelect] =useState(1);
    const handleSubmit = event => {
        event.preventDefault();

        if(!input)
            return;
        //here we have tht state
        const descrition = input;
        const quantity=select;
        setInput('');
        setSelect(1);
        func([{id:Date.now(),description:descrition,quantity:quantity,packed:false}]);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip</h3>
            <select value={select} onChange={(e)=>setSelect(Number(e.target.value))}>
                {Array.from({length:20},(_,i)=>i+1).map(i=><option value={i} key={i}>{i}</option>)}
            </select>
            <input type='text' placeholder='Item...' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button > add </button>
        </form>
    )
}

export default Form;
