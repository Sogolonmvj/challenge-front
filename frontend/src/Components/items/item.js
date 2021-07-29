import React from 'react';

const Item = (props) => {

    return (
        <>
            <li className="space"><a href="#" className="lorem">{props.text}</a></li>
        </>
    )

}

export default Item;