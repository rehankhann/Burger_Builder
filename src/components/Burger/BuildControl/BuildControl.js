import React from 'react';
import Classes from './BuildControl.css';
import Control from './control/control.js'

const control = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'},
]

const Buildcontrol = (props) =>{
    return(
        <div className="">
            {
                control.map((cntrl) => (
                    <Control 
                    remove={() => props.removeingredient(cntrl.type)} 
                    added={() => props.ingredientadded(cntrl.type)} 
                    key={cntrl.label} 
                    label={cntrl.label}/>
                ))
            }
            <div className={Classes.txt_center}>
                <button disabled={props.purchase} className={Classes.OrderButton}>ORDER NOW</button>
            </div>
        </div>
    )
}

export default Buildcontrol;