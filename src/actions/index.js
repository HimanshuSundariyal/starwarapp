export const loginUser = (username, password) => {
    return (dispatch) => {
        fetch(`https://swapi.co/api/people/?search=${username}`)
        .then(res => res.json())
        .then(user => { 
           if(user.results.length){
            if(user.results[0].birth_year == password){
				dispatch({type: 'LOGIN_USER', payload:user.results[0]}) 
            }
            else
            {
                dispatch({type: 'LOGIN_ERROR', payload:"error"}) 
            }
            }
            else
            {
              dispatch({type: 'NO_USER_FOUND', payload:"error"}) 
            }

         });
    }
}


export const searchplanets = (username, password) => {
    return (dispatch) => {
        fetch(`https://swapi.co/api/planets/?search=${username}`)
        .then(res => res.json())
        .then(planets => { 
				dispatch({type: 'SEARCH_RESULT', payload:planets}) 
         });
    }
}

