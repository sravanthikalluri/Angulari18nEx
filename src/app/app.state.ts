


export interface AppState {
    getCartItems: any;
    quantity: any ;

}
/*
export interface HeadersState {
    headersMenu: any;
}
*/

export const INITIAL_STATE: AppState = {
    getCartItems: [],
    quantity: 0
}

/*
export const INITIAL_STATE1: HeadersState = {
    headersMenu: []
}
*/


export function cartReducer(state: AppState = INITIAL_STATE, action) {
    switch (action.type) {
        case 'add':
            action.cartList['quantity'] = action.cartList['quantity'] ? action.cartList['quantity'] : 1;
            var itemQuantity = state.getCartItems.filter(item => {
                return action.cartList.pid == item['pid'];
            });
            return {
                ...state,
                getCartItems:  itemQuantity.length > 0 ?
                     setQuantity(state, action, itemQuantity.length) :
                    state.getCartItems.concat(Object.assign({}, action.cartList)),
                quantity: state.quantity + action.cartList['quantity'],
            };
        case 'headers':
            return {
                ...state,
                headersMenu: action.headersMenu
            };
    }

    return state;
}
/*
function headersMenuReducers(state:  HeadersState = INITIAL_STATE1, action) {
    switch (action.type) {
        case 'headers':
            return {
                ...state,
                headersMenu: action.headersMenu
            };
    }

    return state;
}
*/

function setQuantity(state, action, quantity) {
    state.getCartItems.map(data => {
        data['quantity'] = data['pid'] === action.cartList['pid'] ? (data['quantity'] + 1) : data['quantity'];
    })

  return state.getCartItems;
}

