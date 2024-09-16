import { useState } from "react"

function Items({ item , onDeleteElement}) {
    const [checked,setChecked] = useState(false);

    return (
        <li>
            <input type="checkbox" value={checked} onChange={()=>setChecked(cur => !cur)}/>
            <span style={checked ? {textDecoration:'line-through'}:{}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={()=>onDeleteElement(item.id)}>❌</button>
        </li>
    )
}

export default Items
