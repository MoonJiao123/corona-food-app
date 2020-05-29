import { ADD_TO_CART,REMOVE_ITEM, SEARCHED_ITEM, REFRESHED, GET_LIST, CART_CLEARED} from '../actions/cart-actions'

const initState = {
    items: [],
    shoppingItems: [],
    addedItems:[],
    customer: '21', //hard coded
    address: 'yes',
    category: '',
    sort: '',
    low: '',
    high: '',
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

    else{
        return state
    }

}

export default cartReducer