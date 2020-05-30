import { ADD_TO_CART, SEARCHED_ITEM, REFRESHED, GET_LIST, SET_SORT, SET_CAT, SET_HI, SET_LOW, SET_BG } from '../actions/cart-actions'

const initState = {
    items: [],
    addedItems:[],
    customer: '',
    address: '',
    category: 'None',
    sort: 'Distance',
    low: '0',
    high: '1000',
    bg: 'empty'

}
const cartReducer= (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        return {...state};
    }

    else if(action.type === SEARCHED_ITEM){
        return {...state, items: action.items};
    }

    else if(action.type === REFRESHED){
        return {...state, customer: action.session.customer_id, address: action.session.customer_location};
    }

    else if(action.type === GET_LIST){
        return {...state, addedItems: action.list};
    }

    else if(action.type === SET_SORT){
        return {...state, sort: action.sort}
    }

    else if(action.type === SET_CAT){
        return {...state, category: action.cat}
    }

    else if(action.type === SET_LOW){
        return {...state, low: action.low}
    }

    else if(action.type === SET_HI){
        return {...state, high: action.hi}
    }

    else if(action.type === SET_BG){
        let newbg = action.bg === 0?'empty':'';
        return {...state, bg: newbg}
    }

    else{
        return state
    }

}

export default cartReducer