import React from 'react';
import Aux from '../../hoc/auxi.js';
import classes from './Layout.css'
import Toolbar from '../UI/Toolbar/Toolbar.js'

const layout = (props) => {
    return(
        <Aux>
            <Toolbar/>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;