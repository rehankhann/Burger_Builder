import React from 'react';
import Classes from './navigation.css'

const navigationitems = (props) =>{
    return(
        <li className={props.active ? Classes.active : null }><a href={props.links}>{props.children}</a></li>
    );
}

export default navigationitems;