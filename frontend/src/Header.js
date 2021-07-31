import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import text from './static/text';
import Item from './Components/items/item';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Card from './Components/cards/card';
import Products from '../src/static/products/products.json';

const header = () => {
    let sum = 0;

    Products.cart.item.map(product => (
        product.available ? sum += JSON.parse(product.bestPrice)*JSON.parse(product.quantity) : sum += 0
    ));

    let convert = String(sum);

    let array = [];

    for(let i in convert) array[i] = convert[i];

    array.splice([array.length-2], 0, '.');

    let converted = array.join('');

    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });

    const total = formatter.format(converted);

    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-xl navbar-light bg-white shadow-sm">
                    <div className="container-fluid">
                        <div className="d-flex">
                            <Link className="navbar-brand m-0" to="/">
                                <img src='agencia-eplus-n-logo.png' style={{width: 259 + 'px' }} alt="eplus-logo" className="logo" />
                            </Link>
                            <ul className="d-flex flex-horizontal dots links">
                                <li><Item text={ text[0] }/></li>
                                <li><Item text={ text[1] }/></li>
                                <li><Item text={ text[2] }/></li>
                                <li><Item text={ text[3] }/></li>
                                <li><Item text={ text[4] }/></li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse d-flex justify-content-end right-content" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item c-dropdown_item responsive">
                                    <span className="nav-link c-dropdown_item-title">Ver Mais</span>
                                    <ul className="c-dropdown_submenu dots shadow-sm" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="myDropDown">
                                            <li className="c-dropdown_submenu-item">
                                                <Item text={ text[0] }/>
                                            </li>
                                            <li className="c-dropdown_submenu-item">
                                                <Item text={ text[1] }/>
                                            </li>
                                            <li className="c-dropdown_submenu-item">
                                                <Item text={ text[2] }/>
                                            </li>
                                            <li className="c-dropdown_submenu-item">
                                                <Item text={ text[3] }/>
                                            </li>
                                            <li className="c-dropdown_submenu-item">
                                                <Item text={ text[4] }/>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><SearchIcon className="icon"/></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><PersonIcon className="icon"/></Link>
                                </li>
                                <li className="nav-item c-dropdown__item">
                                    <span className="nav-link c-dropdown__item-title" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <ShoppingCartIcon className="icon"/>
                                    </span>
                                    <ul className="c-dropdown__submenu dots shadow-sm" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="myDropDown">
                                            {Products.cart.item.map(product => (
                                                <li key={product.productId} className="c-dropdown__submenu-item">
                                                    <Card available={product.available} channel={product.salesChannel} image={product.image} alt='product' product={product.name} quantity={product.quantity} price={product.bestPriceFormated} />
                                                </li>
                                            ))} 
                                        </div>
                                        <li className="final-price d-flex align-items-center justify-content-center">
                                            <span>Total do pedido: <b>{total}</b></span>
                                        </li>
                                        <li className="finish d-flex align-items-center justify-content-center">
                                            <Link to="/" className="text-decoration-none"><span className="fw-bold text-white">FINALIZAR COMPRA</span></Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/component">{/*Any Component*/}</Route>
                    <Route path="/anothercomponent">{/*Another Component*/}</Route>
                </Switch>
            </BrowserRouter>
        </>
    )
};

export default header;