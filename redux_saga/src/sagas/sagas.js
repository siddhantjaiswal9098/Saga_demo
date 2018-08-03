import {  put, takeEvery  } from 'redux-saga/effects';

function* fetchUser(action) {
   try {
      const data = yield fetch("https://reqres.in/api/users")
      .then((response)=> {
          return response.json();
      })
      .then((users) => {
        return users.data;  
      });
      yield put({type : "USER_FETCH_SUCCESS", data}); 
   } 
   catch (error) {
      yield put({type: "USER_FETCH_FAILED", message: error.message});
   }
}
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
export default mySaga;
