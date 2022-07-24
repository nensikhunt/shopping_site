import {Counter} from '../Type/Type';

export const incrementAction=(data)=>{
    return {
        type:Counter.INCREMENT,
        payload:data
    }
}

export const decrementAction=(data)=>{
    return {
        type:Counter.DECREMENT,
        payload:data
    }
}

