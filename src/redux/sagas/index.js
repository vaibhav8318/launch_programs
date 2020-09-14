import { all } from 'redux-saga/effects';
import rootWatcherLaunches from './launches';

export default function* rootSaga() {
  yield all([
    rootWatcherLaunches(),
  ]);
}
