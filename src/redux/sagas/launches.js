// ------------------------------------
// Imports
// ------------------------------------
import {
  takeLatest, put, call, all
} from 'redux-saga/effects';
import { fetchLaunchesListApi } from 'api/launches';
import {
  GET_LAUNCHES_START,
  getLaunchesSuccess,
  getLaunchesFailed,
} from '../actions/launches';

// ------------------------------------
// Workers
// ------------------------------------
function* getLaunchesList(action) {
  try {
    const response = yield call(fetchLaunchesListApi, action.data);
    const { body } = response;
    yield put(getLaunchesSuccess(body));
  } catch (e) {
    yield put(getLaunchesFailed(e));
  }
}

// ------------------------------------
// Watchers
// ------------------------------------
function* launchesWatcher() {
  yield takeLatest(GET_LAUNCHES_START, getLaunchesList);
}
export default function* rootWatcherLaunches() {
  yield all([launchesWatcher()]);
}
