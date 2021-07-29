import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
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
                                <a className="nav-link" href="#"><SearchIcon className="icon"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><PersonIcon className="icon"/></a>
                            </li>
                            <li className="nav-item c-dropdown__item">
                                <span className="nav-link c-dropdown__item-title" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <ShoppingCartIcon className="icon"/>
                                </span>
                                <ul className="c-dropdown__submenu dots shadow-sm" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="myDropDown">
                                        <li className="c-dropdown__submenu-item">
                                            <a className="c-dropdown__submenu-link text-decoration-none text-dark" href="#">Action</a>
                                        </li>
                                        <li className="c-dropdown__submenu-item">
                                            <a className="c-dropdown__submenu-link text-decoration-none text-dark" href="#">Another action</a>
                                        </li>
                                        <li className="c-dropdown__submenu-item">
                                            <a className="c-dropdown__submenu-link text-decoration-none text-dark" href="#">Something else here</a>
                                        </li>
                                    </div>
                                    
                                    <li className="final-price d-flex align-items-center justify-content-center">
                                        <span>Total do pedido: <b>R$</b> {/*{price}*/} </span>
                                    </li>
                                    <li className="finish d-flex align-items-center justify-content-center">
                                        <span className="fw-bold text-white">FINALIZAR COMPRA</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default header;