import React from 'react'
import Classes from './Toolbar.css'
import Logo from '../../Logo/Logo'

const Toolbar = () => {
    return (
        <header className={Classes.Toolbar}>
            <div className="">Menu</div>
            <Logo/>
            <nav>...</nav>
        </header>
    );
}

export default Toolbar;