const reducer = (state=[], action) => {
    switch(action.type) 
    {
      case 'LOGIN_USER':
          return {  loginsuccess:"Yes", userdata:action.payload }
      case 'LOGIN_ERROR':
        return{wrongdetails:true}
      case 'NO_USER_FOUND':
          return {userdatefound:true }
      case 'SEARCH_RESULT':
          return {searchresult:action.payload.results }
    } 
    return state; 

  }
export default reducer;