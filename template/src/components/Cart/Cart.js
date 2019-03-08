import React from 'react';
import CartItem from "../CartItem/CartItem";
import { BubblesConsumer } from "../../context/BubblesContext";


class Cart extends React.Component {
    componentDidMount() {
        this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
    }
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        };
    }
    render() {
        return (
            <div className="jumbotron">
                <h3 className="display-4">Your shopping cart:</h3>
                {
                    this.state.cart.map(item => <CartItem key={ item.id } { ...item } />)
                }
            </div>
        );
    }
};

export default Cart;
