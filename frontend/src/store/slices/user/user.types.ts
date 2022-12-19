import { User } from 'src/store/services/user.service';
import {
  AUTHORIZE_USER,
  UNAUTHORIZE_USER,
  USER_PROFILE_FAILED,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from './user.action';

export interface UserProfileRequestAction {
  type: typeof USER_PROFILE_REQUEST;
}

export interface UserProfileSuccessAction {
  type: typeof USER_PROFILE_SUCCESS;
  payload: User;
}

export interface UserProfileFailedAction {
  type: typeof USER_PROFILE_FAILED;
  payload: any;
}

export interface AuthorizeUserAction {
  type: typeof AUTHORIZE_USER;
  payload: User;
}

export interface UnauthorizeUserAction {
  type: typeof UNAUTHORIZE_USER;
  payload: any;
}

export type UserActionTypes =
  | UserProfileFailedAction
  | UserProfileRequestAction
  | UserProfileSuccessAction
  | AuthorizeUserAction
  | UnauthorizeUserAction;
