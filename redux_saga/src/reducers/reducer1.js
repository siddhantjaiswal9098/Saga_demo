const initialstate = {data : []}
export default Demo = (state =initialstate,action) => {
  switch (action.type) {
    case "USER_FETCH_SUCCESS" :
        return {
            ...state,
            data : action.data,
        }
    case "USER_FETCH_FAILED" : 
            return {
                state
            }
    default : 
        return state;
    }
}