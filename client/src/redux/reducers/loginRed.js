import {LOGIN} from '../actions/types'

const startState = {
    user: {
        username:'',
        password: '',
        validation:false,
        token: ''
    }  
}

export default function(state = startState, action){
    console.log(action.payload)
    switch(action.type){
        case LOGIN:
        return [...state, JSON.stringify(action.payload.user)]
        default: return state
    }
    debugger
}