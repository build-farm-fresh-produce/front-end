function getTotalCost(state) {
    return state.cart.reduce((totalAcc, item) => item.quantity_in_cart * item.price + totalAcc, 0);
}

export default getTotalCost