import React from 'react';
import Classes from './control.css'

const control = (props) => {
    return(
        <div className={Classes.BuildControl}>
            <p>{props.label}</p>
            <button onClick={props.remove} className={Classes.Less}>Less</button>
            <button onClick={props.added} className={Classes.More}>More</button>
        </div>
    );
}

export default control;