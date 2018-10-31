import React from 'react';
import Aux from '../../hoc/auxi.js';
import classes from './Layout.css'

const layout = (props) => {
    return(
        <Aux>
            <div className="">ToolBar , Sidedrawer , Backdrop</div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;