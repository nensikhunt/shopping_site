import { ProductType } from "../Type/ProductType";

const initialState = {
    products: []
}
const cartProducts = [];
const wishlistProducts = [];

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductType.PRODUCTTYPE:
            return state = action.payload;
        default:
            return state;
    }
}

export const cartProductReducer = (state = cartProducts, { type, payload }) => {
    switch (type) {
        case ProductType.CARTPRODUCTTYPE:
            let tempcart = state.filter((props) => props.id === payload.id)
            if (tempcart < 1) {
                return [...state, payload]
            }
            else {
                return state
            }
        case ProductType.REMOVEPRODUCTTYPE:
            return state.filter((p) => p.id !== payload.id);
        case ProductType.REMOVEALLPRODUCTTYPE:
            return state = [];
        case ProductType.INCREMENTPRODUCTTYPE:
            let increse = state.map((value) => {
                if (value.id === payload.id) {
                    return ({ ...value, quantity: value.quantity + 1 })
                }
                return value;
            })
            return increse;
        case ProductType.DECREMENTPRODUCTTYPE:
            let decrese = state.map((value) => {
                if (value.id === payload.id) {
                    if(value.quantity<=0){
                        return ({ ...value, quantity: value.quantity =0 })
                    }else{
                        return ({ ...value, quantity: value.quantity - 1 })
                    }
                    
                }
                return value;
            })
            return decrese;
        default:
            return state;
    }
}

export const wishlistProductReducer = (state = wishlistProducts, { type, payload }) => {
    switch (type) {
        case ProductType.WISHLISTPRODUCTTYPE:
            let wishlist = state.filter((props) => props.id === payload.id)
            if (wishlist < 1) {
                return [...state, payload]
            }
            else {
                return state
            }
        case ProductType.REMOVEWISHLISTPRODUCTTYPE:
            return state.filter((p) => p.id !== payload.id);
        case ProductType.REMOVEALLWISHLISTPRODUCTTYPE:
            return state = [];
        default:
            return state;
    }
}