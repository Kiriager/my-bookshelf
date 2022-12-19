import { User } from 'src/store/services/user.service';
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESTORE_USER,
  USER_PROFILE_FAILED,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
} from './user.action';
import { UserStateError } from './user.slice';

export interface LogInRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: LogInRequestData;
}

export interface LogInSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export interface LogInFailedAction {
  type: typeof LOGIN_FAILED;
  payload: UserStateError;
}

export interface LogInRequestData {
  email: string;
  password: string;
}

export interface UserProfileRequestAction {
  type: typeof USER_PROFILE_REQUEST;
}

export interface RestoreUserAction {
  type: typeof RESTORE_USER;
}

export interface UserProfileSuccessAction {
  type: typeof USER_PROFILE_SUCCESS;
  payload: User;
}

export interface UserProfileFailedAction {
  type: typeof USER_PROFILE_FAILED;
  payload: UserStateError;
}

export type UserActionTypes =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailedAction
  | UserProfileFailedAction
  | UserProfileRequestAction
  | UserProfileSuccessAction
  | RestoreUserAction;
