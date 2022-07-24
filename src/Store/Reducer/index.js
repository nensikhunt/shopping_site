import { combineReducers } from "redux";
import { cartProductReducer, productReducer, wishlistProductReducer } from "./ProductReducer";
import { counterReducer } from "./Reducer";

const rootReducer = combineReducers({
    count: counterReducer,
    product: productReducer,
    cartProduct: cartProductReducer,
    wishlistProduct: wishlistProductReducer
})
export default rootReducer;