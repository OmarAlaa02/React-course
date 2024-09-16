import Items from './Items'


function PackingList({ initialItems , onDeleteElement ,onClearClicked }) {
    return (
        <div className='list'>
           {initialItems.length >0 && 
           <>
                <ul>
                    {
                        initialItems.map((item) => <Items item={item} key={item.id} onDeleteElement={onDeleteElement}/> )
                    }
                </ul>

                <div>
                    <button onClick={onClearClicked}>clear</button>
                </div>
            </>}

            {initialItems.length === 0 && <h3>No items yet ...</h3>}
        </div>
    )
}

export default PackingList
