import {LOGIN} from '../actions/types'

const startState = {
    user: {
        username:'',
        password: '',
        validation:false   
    }  
}

export default function(state = startState, action){
    console.log(action.payload)
    switch(action.type){
        case LOGIN:
        return {
            ...state,
            user:action.payload,
            validation: true

        }
        default: return state
    }

}