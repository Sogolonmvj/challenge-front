import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {

    if (!props) return null;

    return (
        <>
            <li className="space"><Link to="/" className="lorem">{props.text.text}</Link></li>
        </>
    )

}

export default Item;