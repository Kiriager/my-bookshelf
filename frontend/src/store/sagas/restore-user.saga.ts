import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchUser } from '../services/user.service';
import { setUserAccessToken } from '../services/userTokens.service';

import { logInFailed, logInSuccess, restoreUser } from '../slices/user/user.action';

export function* restoreSessionSaga(): SagaIterator {
  try {
    yield put(restoreUser());
    const currentUser = yield call(fetchUser);
    setUserAccessToken(currentUser.accessToken);
    yield put(logInSuccess({ id: currentUser.id, email: currentUser.email }));
  } catch (error) {
    yield put(logInFailed(error));
  }
}
