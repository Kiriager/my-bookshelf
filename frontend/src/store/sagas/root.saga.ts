import { all, call } from 'redux-saga/effects';
import { authWatchSaga, restoreSessionSaga } from './auth.saga';

export default function* rootSaga() {
  yield all([call(restoreSessionSaga), call(authWatchSaga)]);
}
