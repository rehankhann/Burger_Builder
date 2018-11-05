import React from 'react'
import Classes from './Logo.css'
import burgerlogo from '../../assets/images/burger-logo.png'

const Logo = () => {
    return(
        <div className={Classes.logo}>
            <img src={burgerlogo} alt="" title=""/>
        </div>
    );
}

export default Logo;