import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { login } from '../services/user.service';
import { setUserAccessToken } from '../services/userTokens.service';

import { logInFailed, logInSuccess, LOGIN_REQUEST } from '../slices/user/user.action';
import { LogInRequestAction } from '../slices/user/user.types';

export function* logInSaga(action: LogInRequestAction): SagaIterator {
  try {
    const loginResult = yield call(login, action.payload.email, action.payload.password);
    setUserAccessToken(loginResult.accessToken);
    yield put(logInSuccess({ id: loginResult.id, email: loginResult.email }));
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.statusText === 'Unauthorized') {
        yield put(logInFailed({ type: error.response.data.error }));
      }
    } else {
      yield put(logInFailed(error));
    }
  }
}

export function* watchLoginRequest(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, logInSaga);
}
