export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    value: user //should add new person to the database 
  }
}

export const logIn = (status) => {
  return {
    type: 'LOGIN',
    value: status //should be boolean
  }
}

export const addToShoppingList = (input) => {
  return {
    type: 'ADD_TO_SHOPPING_LIST',
    value: input //should this be a class? 
  }
}

export const addToPantry = (input) => {
  return {
    type: 'ADD_TO_PANTRY',
    value: input //should this be a class? 
  }
}

export const fetchFood = () => {
  return (dispatch) => {
    fetch("https://api.spoonacular.com/recipes/complexSearch")
      .then(req => req.json())
      .then(res => {
        dispatch({ //need to pull in the information, do I need to add the key here? 
          //type: 'FETCH_FOOD',
          //value: 
        })
      })
  }
}