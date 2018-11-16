import React from 'react';
import Classes from './Modal.css';
import Backdrop from '../UI/Backdrop/Backdrop'
import Aux from '../../hoc/auxi'

const Modal = (props) => {
    return(
        <Aux>
            <Backdrop hide={props.hide}/>
            <div style={{display:props.hide}} className={Classes.Modal}>
                <button onClick={props.dismisspopup}>Close</button>
                <button style={{display:props.continuehide}} onClick={props.continue}>Continue</button>
                {props.children}
            </div>
        </Aux>
    );
}

export default Modal;