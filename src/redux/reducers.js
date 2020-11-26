import {combineReducers} from 'redux';

//add content for each action 
const createUser = (state = [], action) => {
  //create a new user 
}


const logIn = (state = [], action) => {
  switch(action.type) {
    case 'LOGIN':
      return [...state, action.value]
    default: 
      return state
  }  
}

const food = () => {
  
}

const myPantry = (state=[], action) => {
  switch(action.type) {
    default: 
    return state
  }
}

const myShopList = (state=[], action) => {

}

const myPalList = () => {

}

const merge = () => {

}


const palsPantry = (state=[], action) => {
  switch(action.type) {
    default: 
    return state
  }
}

const palShopList = (state=[], action) => {

}

const palsPalList = () => {

}


export default combineReducers({
  //import action options 
  logIn
})