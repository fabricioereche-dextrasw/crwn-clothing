import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch})=> (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map( item => (
                    <CartItem key={item.id} item={item}/>
                ))
                :
                (<span className="empty-message">Your cart is empty.</span>)
            }
        </div>
        <CustomButtom onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButtom>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));