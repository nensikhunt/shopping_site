import { Counter } from "../Type/Type";

const initialState=1;

export const counterReducer=(state=initialState,{type,payload})=>{
    if(!payload){
        payload=1;
    }
    switch(type){
        case Counter.INCREMENT:
            return state+payload;
        case Counter.DECREMENT:
            return state-payload;
        default:
            return state;
    }
}