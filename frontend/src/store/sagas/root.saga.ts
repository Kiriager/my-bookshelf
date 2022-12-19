import { all, call } from 'redux-saga/effects';
import { watchLoginRequest } from './login.saga';
import { restoreSessionSaga } from './restore-user.saga';
import { watchUserProfile } from './user-profile.saga';

export default function* rootSaga() {
  yield all([call(restoreSessionSaga), call(watchLoginRequest), call(watchUserProfile)]);
}
