import {Fragment, useState} from "react";

function ListGroup() {
    let items= ['Tenczynek', 'Kaków', 'Nowy Jork']
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const message = items.length === 0 && <p>No items found</p>


    if (items.length===0){
        return <><h1>List</h1>
        <p>No items found</p></>
    }

    return (
    <>
        <h1>List</h1>
        {message}
        <ul className="list-group">
            {items.map((item, index) => (
                <li className={selectedIndex===index ? 'list-group-item active' : 'list-group-item'}
                    key={index}
                    onClick={()=>setSelectedIndex(index)}
                >
                    {item}
                </li>))}
        </ul>
    </>
    )
    // for empty tag <> React automatically assign <Fragment> tag
}

export default ListGroup