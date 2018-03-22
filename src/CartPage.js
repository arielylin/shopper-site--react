import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({items, onAddOne, onRemoveOne, totalPrice}) {
    if (items.length > 0) { 
        return (
            <ul className="CartPage-items">
                {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button
                                className="CartItem-removeOne"
                                onClick={()=> onRemoveOne(item)}>&ndash;
                            </button>
                            <span className="CartItem-count">{item.count}</span>
                            <button
                                className="cartItem-addOne"
                                onClick={() => onAddOne(item)}>+
                            </button>
                        </div>
                    </Item>
                </li>
                )}
                <div className="total-price">Total Price: ${totalPrice}</div>
            </ul>
        );
    } else {
        return (
            <div className="noItems">There are no items in your cart!</div>
        )
    }
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default CartPage;