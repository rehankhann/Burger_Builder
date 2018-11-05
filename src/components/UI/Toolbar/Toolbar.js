import React from 'react'
import Classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigation from '../../Navigation/navigation'

const Toolbar = () => {
    return (
        <header className={Classes.Toolbar}>
            <div className="">Menu</div>
            <Logo/>
            <nav>
                <Navigation>Home</Navigation>
            </nav>
        </header>
    );
}

export default Toolbar;