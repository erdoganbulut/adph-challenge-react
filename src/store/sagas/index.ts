import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function fetchDataset() {
  return axios({
    method: 'get',
    url: '/dataset.json',
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchDataset);
    const dataset = response.data;
    yield put({ type: 'API_CALL_SUCCESS', dataset });
  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  }
}

export default function* watcherSaga() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
}
