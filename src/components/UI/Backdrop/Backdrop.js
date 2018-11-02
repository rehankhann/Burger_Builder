import React from 'react';
import Classes from './backdrop.css'

const Backdrop = (props) => {
    return (
        <div style={{display:props.hide}} className={Classes.backdrop}></div>
    );
}

export default Backdrop;