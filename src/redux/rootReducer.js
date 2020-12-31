
 
const initialState = {
    currentUser: null,
  }
  
  export const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'LOGIN_USER':
          return {...state, currentUser: action.payload}
        case 'LOGOUT':
          return {...state, currentUser: null}
        default:
          return state;
      }
    }