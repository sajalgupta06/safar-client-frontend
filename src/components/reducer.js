const reducer = (state, action) => {
    switch (action.type) {
      case "SET_AUTHENTICATE":
        return {
          ...state,
          isAuthenticated: action.payload,
        };
        
        case "SET_USER":
          return {
            ...state,
            user: action.payload,
          };

          case "SET_USER_FAVOURITE_TRIPS":
          
            return {
              ...state,
              user:{
                ...state.user,
                favouriteTrips: action.payload
                ,

              }
              
            };
            

      default:
        return state;
    }
  };
  
  export default reducer;
  