import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {

    return (
        <>
            <li className="space"><Link to="/" className="lorem">{props.text}</Link></li>
        </>
    )

}

export default Item;