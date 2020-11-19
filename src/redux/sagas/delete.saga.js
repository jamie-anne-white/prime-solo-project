import {takeLatest} from 'redux-saga/effects';
import axios from 'axios';

function* deleteResults (action) {
console.log('test to see if it is in SAGA', action.payload);

    try {
        yield axios.delete(`/api/results/${action.payload}`);
    } catch (error) {
        console.log('error in delete catch', error);
    }
}

function* deleteSaga() {
    yield takeLatest ('DELETE_RESULTS', deleteResults);
  }

export default deleteSaga;