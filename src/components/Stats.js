function Stats({ items }) {
    if(!items.length)
        return <p className='stats'> no items yet start packing 🚀 </p>

    const len=items.length;
    const packed=items.filter(item=> item.packed).length;
    const precent = Math.round(packed / len *100)

    return (
        <footer className='stats'>
            <em>
                {precent === 100 ? 'You packed all item , Ready to go ✈️' : `You have ${len} items , packed ${packed} (${precent}%)`}
            </em>
        </footer>
    )
}

export default Stats
