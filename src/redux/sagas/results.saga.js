import axios from 'axios';
import {takeLatest, put } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_USER" actions

function* fetchResults() {
  // console.log('fetchResult', action);
  
  try {
    const resultsResponse = yield axios.get('/api/results');
    console.log('test to see if it is in SAGA', resultsResponse.data);
    
    yield put({ type: 'SET_RESULTS', payload: resultsResponse.data })
  } catch (error) {
    console.log('Results get request failed', error);
  }
}

function* resultsSaga() {
  yield takeLatest('FETCH_RESULTS', fetchResults);
}

export default resultsSaga;
