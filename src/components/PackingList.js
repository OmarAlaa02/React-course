import Items from './Items'
import { useState } from 'react';

function PackingList({ initialItems , onDeleteElement ,onClearClicked ,onUpdateChecked }) {

    const [sortBy,setSortBy] = useState('input');

    let sortedItems;

    if(sortBy === 'input') sortedItems = initialItems;
    else if(sortBy === 'description') sortedItems = initialItems.slice().sort((a,b)=>a.description.localeCompare(b.description));
    else sortedItems=initialItems.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));

    return (
        <div className='list'>
           {initialItems.length >0 && 
           <>
                <ul>
                    {
                        sortedItems.map((item) => <Items item={item} onDeleteElement={onDeleteElement} onUpdateChecked={onUpdateChecked} key={item.id} /> )
                    }
                </ul>

                <div className='actions'>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value='input'>sort by input</option>
                        <option value='description'>sort by name</option>
                        <option value='packed'>sort by packed</option>
                    </select>
                    <button onClick={onClearClicked}>clear</button>
                </div>
            </>}

            {initialItems.length === 0 && <h3>No items yet ...</h3>}
        </div>
    )
}

export default PackingList
