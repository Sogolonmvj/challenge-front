import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {

    if (!props) return null;

    return (
        <>
            <span className="space d-flex align-items-center"><Link to="/" className="lorem">{props.text.text}</Link></span>
        </>
    )

}

export default Item;