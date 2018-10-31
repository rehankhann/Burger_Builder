import React from 'react';
import Classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    /*let transfromind = [];
    for( let i in props.ingredient ) {
        let ingredientValue = props.ingredient[i];
        for( let ind_val = 1; ind_val <= ingredientValue; ind_val++ ) {
            transfromind.push(<BurgerIngredient key={i + 1} type={i}/>);
        }
    }*/

    const transfromind = Object.keys(props.ingredient).map(igkey =>{
        return[...Array(props.ingredient[igkey])].map((_ , i) => {
            return <BurgerIngredient key={igkey + i} type={igkey}/>
        });
    });
    
    return(
        <div className={Classes.burger}>
            <BurgerIngredient type="bread-top"/>
            {transfromind}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;