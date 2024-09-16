import Items from './Items'


function PackingList({ initialItems }) {
    return (
        <div className='list'>
            <ul>
                {
                    initialItems.map((item) => <Items item={item} key={item.id}/> )
                }
            </ul>
        </div>
    )
}

export default PackingList
