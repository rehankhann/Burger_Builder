import React from 'react';
import Classes from './navigation.css';
import Navigationitem from './navigationitems'

const Navigation = () =>{
    return(
        <ul className={Classes.Navigation}>
            <Navigationitem links="/" active>Home</Navigationitem>
            <Navigationitem links="/">Burger Builder</Navigationitem>
        </ul>
    )
}

export default Navigation;