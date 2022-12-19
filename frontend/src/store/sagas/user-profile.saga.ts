import { AxiosError } from 'axios';
import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserProfileData, login } from '../services/user.service';
import { setUserAccessToken } from '../services/userTokens.service';

import {
  getUserProfileSuccess,
  logInFailed,
  USER_PROFILE_REQUEST,
} from '../slices/user/user.action';

export function* getUserProfileSaga(): SagaIterator {
  try {
    const profileData = yield call(getUserProfileData);
    yield put(getUserProfileSuccess({ id: profileData.data.id, email: profileData.data.email }));
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

export function* watchUserProfile(): SagaIterator {
  yield takeLatest(USER_PROFILE_REQUEST, getUserProfileSaga);
}
