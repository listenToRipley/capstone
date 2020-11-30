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
        let newState = action.payload.user
        return newState
        default: return state
    }

}