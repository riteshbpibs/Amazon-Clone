export const initialState = {
    basket: [],
    user: null
}

// Selector
export const getBasketTotal = (basket) => basket?.reduce((acc, curr) => curr.price + acc, 0)

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
            break;
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                window.alert('Cant remove product')
            }

            return {
                ...state,
                basket: newBasket
            }
            break;
        case "PLACE_ORDER":
            return {
                ...state,
                basket: []
            }
            break;
        default:
            break;
    }
}