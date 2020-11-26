import {combineReducers} from 'redux';

//add content for each action 
const createUser = (state = [], action) => {
  switch(action.type) {
    case 'CREATE USER' {
      user = state
    }
  }
}


const logIn = (state = [], action) => {
  switch(action.type) {
    case 'LOGIN':
      return [...state, action.value]
    default: 
      return state
  }  
}

const food = (state =[], action) => {
  switch(action.type) {
    case 'FETCH_FOOD':
      return [...state, action.value] // should return the search items 
  } // this is only function of this, it will be used in a number of other locations. 
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