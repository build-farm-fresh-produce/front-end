export const COMPLETE_ORDER = 'COMPLETE_ORDER'

export const completeOrder = cart => {
    return {
        type: COMPLETE_ORDER,
        payload: cart
    };
};