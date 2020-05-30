import { ADD_TO_CART, SEARCHED_ITEM, REFRESHED, GET_LIST,SET_SORT, SET_CAT, SET_HI, SET_LOW, SET_BG} from './cart-actions'

export const addToCart= (cart)=>{
    return{
        type: ADD_TO_CART,
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

export const setSort = (sort) =>{
    return{
        type: SET_SORT,
        sort
    }
}

export const setCat = (cat) =>{
    return{
        type: SET_CAT,
        cat
    }
}

export const setLow = (low) =>{
    return{
        type: SET_LOW,
        low
    }
}

export const setHi = (hi) =>{
    return{
        type: SET_HI,
        hi
    }
}

export const setBg = (bg) =>{
    return{
        type: SET_BG,
        bg
    }
}