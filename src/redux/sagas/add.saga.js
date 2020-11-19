import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';


function* addResults(action) {
    console.log('in addSaga', action.payload);
    
    try {
        console.log("In ADD SAGA with ", action.payload);        
        let response = yield axios.post(`/api/add/`, action.payload)
        yield put({type: 'GET_RESULTS', payload: response.data})
    } catch (error) {
        console.log('error in postItem', error);
        
    }

}

function* addSaga() {
    yield takeLatest ('ADD_RESULTS', addResults);
  }

  export default addSaga;