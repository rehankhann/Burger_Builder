import React, { Component } from 'react';
import Aux from '../../hoc/auxi';
import Burger from '../../components/Burger/Burger';
import Buildcontrol from '../../components/Burger/BuildControl/BuildControl';
import Modal from '../../components/Modal/Modal';
import Ordersummary from '../../components/UI/ordersummary/ordersummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop'

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
        purchaseable:'disabled',
        ordersummary:'none'
    }

    addingredientHandler = (type) => {
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

    checkout = () => {
        this.setState({
            ordersummary:'block'
        })
    }

    ClosePopup = () => {
        this.setState({
            ordersummary:'none'
        })
    }

    render(){
        return(
            <Aux>
                <Backdrop hide={this.state.ordersummary}/>
                <Burger price={this.state.totalPrice} ingredient={this.state.ingredients} />
                <Buildcontrol checkout={this.checkout} purchase={this.state.purchaseable} removeingredient={this.removeingrdientHandler} ingredientadded={this.addingredientHandler}/>
                <Modal dismisspopup={this.ClosePopup} hide={this.state.ordersummary}><Ordersummary finalprice={this.state.totalPrice} summary={this.state.ingredients}></Ordersummary></Modal>
            </Aux>
        );
    }

}

export default BurgerBuilder;