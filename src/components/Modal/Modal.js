import React from 'react';
import Classes from './Modal.css';

const Modal = (props) => {
    return(
        <div style={{display:props.hide}} className={Classes.Modal}>
            <button onClick={props.dismisspopup}>Close</button>
            <button onClick={props.continue}>Continue</button>
            {props.children}
        </div>
    );
}

export default Modal;