
function Items({ item , onDeleteElement ,onUpdateChecked}) {

    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={()=>onUpdateChecked(item.id)}/>
            <span style={item.packed ? {textDecoration:'line-through'}:{}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={()=>onDeleteElement(item.id)}>❌</button>
        </li>
    )
}

export default Items
