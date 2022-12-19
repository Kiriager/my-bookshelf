import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUser, login } from '../services/user.service';
import { setUserAccessToken } from '../services/userTokens.service';
import {
  loginFailed,
  loginSuccess,
  LOGIN_REQUEST,
  restoreSessionFailed,
  restoreSessionRequest,
  RESTORE_SESSION_REQUEST,
} from '../slices/auth/auth.action';
import { LoginRequestAction } from '../slices/auth/auth.types';
import { authorizeUser, unauthorizeUser } from '../slices/user/user.action';

export function* loginSaga(action: LoginRequestAction): SagaIterator {
  try {
    const loginResult = yield call(login, action.payload.email, action.payload.password);
    setUserAccessToken(loginResult.accessToken);
    yield put(loginSuccess());
    yield put(authorizeUser({ id: loginResult.id, email: loginResult.email }));
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.statusText === 'Unauthorized') {
        yield put(loginFailed({ type: error.response.data.error }));
      }
    } else {
      yield put(loginFailed(error));
    }
  }
}

export function* restoreSessionSaga(): SagaIterator {
  try {
    yield put(restoreSessionRequest());
    const currentUser = yield call(fetchUser);
    setUserAccessToken(currentUser.accessToken);
    yield put(authorizeUser({ id: currentUser.id, email: currentUser.email }));
  } catch (error) {
    yield put(restoreSessionFailed(error));
    yield put(unauthorizeUser({}));
  }
}

export function* authWatchSaga(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
