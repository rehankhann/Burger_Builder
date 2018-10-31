import React, { Component } from 'react';
import Aux from '../../hoc/auxi';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingredient={this.state.ingredients} />
                <p>Build Control</p>
            </Aux>
        );
    }

}

export default BurgerBuilder;