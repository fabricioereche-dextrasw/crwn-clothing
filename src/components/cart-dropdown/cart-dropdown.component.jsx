import CustomButtom from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import { CartDropdownContainer, CartDropdownEmptyMessage, CartDropdownItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch})=> (
    <CartDropdownContainer>
        <CartDropdownItemsContainer>
            {
                cartItems.length ?
                cartItems.map( item => (
                    <CartItem key={item.id} item={item}/>
                ))
                :
                (<CartDropdownEmptyMessage>Your cart is empty.</CartDropdownEmptyMessage>)
            }
        </CartDropdownItemsContainer>
        <CustomButtom onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButtom>
    </CartDropdownContainer>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));