import React, { Component } from 'react';
import Aux from '../../hoc/auxi';
import Burger from '../../components/Burger/Burger'
import Buildcontrol from '../../components/Burger/BuildControl/BuildControl'

const INGREDIENT_PRICES = {
    salad:10,
    bacon:20,
    cheese:50,
    meat:100
}

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 30,
        purchaseable:'disabled'
    }

    /*updatepurchase = () => {
        this.setState({
            purchaseable:'true'
        });
    }*/

    addingredientHandler = (type) =>{
        const oldcount = this.state.ingredients[type];
        const updatecount = oldcount + 1 ;
        const updateingredients = {...this.state.ingredients};
        updateingredients[type] = updatecount;

        const Price_Addition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + Price_Addition;

        this.setState({
            ingredients:updateingredients,
            totalPrice:newPrice,
            purchaseable:''
        });
    }

    removeingrdientHandler = (type) => {
        const oldcount = this.state.ingredients[type];
        console.log(oldcount);
        if(oldcount <=0){
            return;
        }
        const updatecount = oldcount - 1 ;
        const updateingredients = {...this.state.ingredients};
        updateingredients[type] = updatecount;
        
        const Price_Addition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - Price_Addition;

        let Pur = ''
        if(newPrice === 30){
            Pur = 'disabled'
        }
        this.setState({
            ingredients:updateingredients,
            totalPrice:newPrice,
            purchaseable:Pur
        });
    }

    render(){
        return(
            <Aux>
                <Burger price={this.state.totalPrice} ingredient={this.state.ingredients} />
                <Buildcontrol purchase={this.state.purchaseable} removeingredient={this.removeingrdientHandler} ingredientadded={this.addingredientHandler}/>
            </Aux>
        );
    }

}

export default BurgerBuilder;