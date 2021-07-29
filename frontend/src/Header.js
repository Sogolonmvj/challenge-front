import React from 'react';
import { text } from './static/text';
import Item from './Components/items/item';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container-fluid">
                    <div className="d-flex">
                        <a className="navbar-brand m-0" href="#">
                            <img src='agencia-eplus-n-logo.png' style={{width: 259 + 'px' }} alt="eplus-logo" className="logo" />
                        </a>
                        <ul className="d-flex flex-horizontal dots links">
                            {text.map(text => (
                                <Item text={text.text}/>
                            ))}
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse d-flex justify-content-end right-content" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><SearchIcon className="icon"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><PersonIcon className="icon"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><ShoppingCartIcon className="icon"/></a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default header;