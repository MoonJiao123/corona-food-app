import { ADD_TO_CART,REMOVE_ITEM, SEARCHED_ITEM, REFRESHED, GET_LIST, CART_CLEARED, SET_SORT, SET_CAT, SET_HI, SET_LOW } from '../actions/cart-actions'

const initState = {
    items: [],
    addedItems:[],
    customer: '0', //hard coded
    address: '',
    category: 'None',
    sort: 'Distance',
    low: '0',
    high: '1000',
}
const cartReducer= (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        return {...state};
    }

    if(action.type === REMOVE_ITEM){
        return {...state, addItems: action.cart}
    }

    if(action.type === CART_CLEARED){
        return {...state, addItems: action.cart}
    }

    if(action.type === SEARCHED_ITEM){
        return {...state, items: action.items};
    }

    if(action.type === REFRESHED){
        return {...state, customer: action.session.customer_id, address: action.session.customer_location};
    }

    if(action.type === GET_LIST){
        return {...state, addedItems: action.list};
    }

    if(action.type === SET_SORT){
        return {...state, sort: action.sort}
    }

    if(action.type === SET_CAT){
        return {...state, category: action.cat}
    }

    if(action.type === SET_LOW){
        return {...state, sort: action.low}
    }

    if(action.type === SET_HI){
        return {...state, sort: action.hi}
    }

    else{
        return state
    }

}

export default cartReducer