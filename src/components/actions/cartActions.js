import { ADD_TO_CART,REMOVE_ITEM, SEARCHED_ITEM, REFRESHED, GET_LIST, CART_CLEARED} from './cart-actions'

export const addToCart= (cart)=>{
    return{
        type: ADD_TO_CART,
        cart
    }
}

export const removeItem=(cart)=>{
    return{
        type: REMOVE_ITEM,
        cart
    }
}

export const cartCleared=(cart)=>{
    return{
        type: CART_CLEARED,
        cart
    }
}

export const searchedItem= (items) =>{
    return{
        type: SEARCHED_ITEM,
        items
    }
}

export const refreshed = (session) =>{
    return{
        type: REFRESHED,
        session
    }
}

export const getList = (list) =>{
    return{
        type: GET_LIST,
        list
    }
}