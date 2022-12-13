import { all, call } from 'redux-saga/effects';
import { watchLoginRequest } from './login.saga';

export default function* rootSaga() {
  yield all([call(watchLoginRequest)]);
}
