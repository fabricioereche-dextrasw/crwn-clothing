import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total})=> (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map( cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total"><span>TOTAL: ${total}</span></div>
        <div className="test-warning">
            *Please use the folowing test credit card for payments*
            <br />VISA = 4242 4242 4242 4242 - Exp: 01/27 CVV: 123
            <br />Mastercard = 5555 5555 5555 4444 - Exp: 01/27 CVV: 123
            <br />American Express = 3782 822463 10005 - Exp: 01/27 CVV: 1234
        </div>
        <StripeButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);