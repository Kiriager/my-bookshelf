import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESTORE_SESSION_REQUEST,
  RESTORE_SESSION_FAILED,
  RESTORE_SESSION_SUCCESS,
} from './auth.action';
import { AuthError } from './auth.slice';

export interface LoginRequestData {
  email: string;
  password: string;
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: LoginRequestData;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailedAction {
  type: typeof LOGIN_FAILED;
  payload: AuthError;
}

export interface RestoreSessionRequestAction {
  type: typeof RESTORE_SESSION_REQUEST;
}

export interface RestoreSessionSuccessAction {
  type: typeof RESTORE_SESSION_SUCCESS;
}

export interface RestoreSessionFailedAction {
  type: typeof RESTORE_SESSION_FAILED;
  payload: AuthError;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailedAction
  | RestoreSessionRequestAction
  | RestoreSessionSuccessAction
  | RestoreSessionFailedAction;
