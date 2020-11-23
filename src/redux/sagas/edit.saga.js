import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';


function* editResults(action) {
    console.log('in editSaga', action.payload);
    
    try {
        console.log("In EDIT SAGA with ", action.payload);    
        let response = yield axios.put(`/api/edit/`, action.payload)
        yield put({type: 'FETCH_RESULTS', payload: response.data})
    } catch (error) {
        console.log('error in postItem', error);
        
    }

}

function * editResultsId(action) {
    try {
        console.log(action.payload, 'object w/id');
        
        let response = yield axios.get(`/api/edit/${action.payload.id}`)
        console.log(response.data)
        //save to redux
        yield put({type: 'EDIT_ID_RESULTS', payload: response.data})
    } catch (error) {
        console.log('error in fetch results id', error);
    }
}

function* editSaga() {
    yield takeLatest ('EDIT_RESULTS', editResults);
    yield takeLatest ('GET_RESULTS', editResultsId)

  }

  export default editSaga;