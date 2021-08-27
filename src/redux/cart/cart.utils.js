export const addItemToCart = (cartItems, item) => {

    let existingCartItem = cartItems.find(
        cartItem => cartItem.id === item.id
    );

    if(! existingCartItem){
        return [...cartItems, {...item, quantity: 1}]
    }

    return cartItems.map(cartItem => {
        if(cartItem.id === item.id){
            return {...cartItem, quantity: cartItem.quantity + 1}
        }
        return cartItem;
    })
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    let existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => (
            cartItem.id !== cartItemToRemove.id
        ))
    }

    return cartItems.map(cartItem => {
        if(cartItem.id === cartItemToRemove.id){
            return {
                ...cartItem,
                quantity: cartItem.quantity - 1
            }
        }

        return cartItem;
    })

}