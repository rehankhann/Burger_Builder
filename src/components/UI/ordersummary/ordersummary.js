import React from 'react';

const ordersummary = (props) => {

    const checkoutingredient = (
        Object.keys(props.summary).map( key => {
            return (
                <li key={key}><span>{key}</span>: {props.summary[key]}</li>
            )
        })
    );

    return(
        <div>
            <h3>A delicios burger is ready with the following ingredients</h3>
            <ul>
                {checkoutingredient}
            </ul>
            <p>Total Price : {props.finalprice}</p>
            <p>Continue to checkout ?</p>
        </div>
    );
}

export default ordersummary;