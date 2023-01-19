import { all, call } from 'redux-saga/effects';
import { authWatchSaga } from './auth.saga';
import { profileWatchSaga } from './profile.saga';

export default function* rootSaga() {
  yield all([/*call(restoreSessionSaga)*/ call(authWatchSaga), call(profileWatchSaga)]);
}
