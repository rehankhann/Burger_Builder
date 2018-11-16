import React, { Component } from 'react';
import Aux from '../../hoc/auxi';
import errorhandler from '../../hoc/errorhandler';
import Burger from '../../components/Burger/Burger';
import Buildcontrol from '../../components/Burger/BuildControl/BuildControl';
import Modal from '../../components/Modal/Modal';
import Ordersummary from '../../components/UI/ordersummary/ordersummary';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/spinner/spinner'

const INGREDIENT_PRICES = {
    salad:10,
    bacon:20,
    cheese:50,
    meat:100
}

class BurgerBuilder extends Component {

    state = {
        ingredients:null,
        totalPrice : 30,
        purchaseable:'disabled',
        ordersummary:'none',
        loading:false,
        error:false
    }

    componentDidMount(){
        axios.get('https://burger-react-app-37a33.firebaseio.com/Ingredients.json').then(response => {
            this.setState({ingredients:response.data});
        }).catch(error=>{
            this.setState({error:true});
        });
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

    continueOrder = () =>{
        this.setState({loading:true});
        const OrderData = {
            ingredients:this.state.ingredients,
            totalPrice:this.state.totalPrice,
            customerData:{
                Name:'Muqeem Khan',
                Address:{
                    city:'Delhi',
                    Pincode:'244001'
                }
            },
            PaymentStatus:'COD'
        }
        axios.post('orders.json' , OrderData).then(response => {
            this.setState({loading:false , ordersummary:'none'})
        }).catch(error=>{
            this.setState({loading:false , ordersummary:'none',})
        });
    }

    

    render(){
        let ordersummary = null;
        let burger = this.state.error ? <p>Ingredients Not loaded</p> : null;
        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger price={this.state.totalPrice} ingredient={this.state.ingredients} />
                    <Buildcontrol checkout={this.checkout} purchase={this.state.purchaseable} removeingredient={this.removeingrdientHandler} ingredientadded={this.addingredientHandler}/>
                </Aux>
            );
            ordersummary = <Ordersummary finalprice={this.state.totalPrice} summary={this.state.ingredients}></Ordersummary>
        }
        if(this.state.loading){
            ordersummary = <Spinner/>
        }

        return(
            <Aux>
                {burger}
                <Modal continue={this.continueOrder} dismisspopup={this.ClosePopup} hide={this.state.ordersummary}>{ordersummary}</Modal>
            </Aux>
        );
    }

}

export default errorhandler(BurgerBuilder , axios);