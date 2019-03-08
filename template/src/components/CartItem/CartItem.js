import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartItem = (props) => {
    const { name, price } = props;
    return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <p className="card-text"><strong>Price: { price } kr.</strong></p>
            <Link to={ "/bubbles/" + props.id }>Item details</Link>
            <div>
                <button type="button" className="btn btn-primary buy-button">Checkout</button>
                <button type="button" className="btn btn-danger cart-remove-button" onClick={
                    function removeItem() {
                        var cart = JSON.parse(localStorage.getItem('cart'));
                        for (var i = 0; i < cart.length; i++) {
                            if(cart[i].name == name) {
                                cart.splice(cart.indexOf(cart[i], 1));
                                break;
                            }
                        }
                        localStorage.setItem("cart", JSON.stringify(cart));
                    }
                } >Remove from cart</button>
            </div>
          </div>
        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default CartItem;
