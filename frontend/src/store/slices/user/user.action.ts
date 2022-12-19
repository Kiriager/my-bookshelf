import { User } from 'src/store/services/user.service';
import {
  AuthorizeUserAction,
  UnauthorizeUserAction,
  UserProfileFailedAction,
  UserProfileRequestAction,
  UserProfileSuccessAction,
} from './user.types';

export const USER_PROFILE_REQUEST = 'USER_PROFILE_REQUEST' as const;
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS' as const;
export const USER_PROFILE_FAILED = 'USER_PROFILE_FAILED' as const;

export const AUTHORIZE_USER = 'AUTHORIZE_USER' as const;
export const UNAUTHORIZE_USER = 'UNAUTHORIZE_USER' as const;

export function authorizeUser(payload: User): AuthorizeUserAction {
  return { type: AUTHORIZE_USER, payload };
}

export function unauthorizeUser(payload: any): UnauthorizeUserAction {
  return { type: UNAUTHORIZE_USER, payload };
}

export function getUserProfileRequest(): UserProfileRequestAction {
  return { type: USER_PROFILE_REQUEST };
}

export function getUserProfileSuccess(payload: User): UserProfileSuccessAction {
  return { type: USER_PROFILE_SUCCESS, payload };
}

export function getUserProfileFailed(payload: any): UserProfileFailedAction {
  return { type: USER_PROFILE_FAILED, payload };
}
