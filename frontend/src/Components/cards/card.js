import React from 'react';

const Card = (props) => {

    if (!props) return null;

    const inventory = props.available === true ? props.price : 'Esgotado!';

    return (
        <>
            <div className="card" style={{width: 310 + 'px'}}>
                <div className="card-body d-flex flex-horizontal">
                    <img src={props.image} alt={props.alt} style={{width: 86 + 'px', height: 85 + 'px'}} className=""/>
                    <div className="d-flex flex-column justify-content-center align-items-center distance">
                        <div className="d-flex flex-horizontal m-0 p-0">
                            <h5 className="size resize" style={{width: 155 + 'px', height: 36 + 'px'}}>{props.product}</h5>
                        </div>
                        <div className="d-flex flex-horizontal m-0 p-0 justify-content-bottom">
                            <h6 className="size" style={{width: 52 + 'px', height: 14 + 'px'}}>Qtd.: {props.quantity}</h6>
                            <h6 className="fw-bold color size price-margin" style={{width: 85 + 'px', height: 12 + 'px'}}> {inventory}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Card;