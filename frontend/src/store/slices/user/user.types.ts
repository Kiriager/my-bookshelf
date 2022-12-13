import { User } from 'src/store/services/user.service';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './user.action';

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
  payload: any;
}

export interface LogInRequestData {
  email: string;
  password: string;
}

export type UserActionTypes = LogInRequestAction | LogInSuccessAction | LogInFailedAction;
