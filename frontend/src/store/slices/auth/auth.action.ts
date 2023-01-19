import {
  LoginFailedAction,
  LoginRequestAction,
  LoginRequestData,
  LoginSuccessAction,
  RegistrationRequestAction,
  RegistrationRequestData,
  RestoreSessionFailedAction,
  RestoreSessionRequestAction,
  RestoreSessionSuccessAction,
} from './auth.types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_FAILED = 'LOGIN_FAILED' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST' as const;
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED' as const;
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS' as const;

export const RESTORE_SESSION_REQUEST = 'RESTORE_SESSION_REQUEST' as const;
export const RESTORE_SESSION_SUCCESS = 'RESTORE_SESSION_SUCCESS' as const;
export const RESTORE_SESSION_FAILED = 'RESTORE_SESSION_FAILED' as const;

export function loginRequest(payload: LoginRequestData): LoginRequestAction {
  return { type: LOGIN_REQUEST, payload };
}

export function loginSuccess(): LoginSuccessAction {
  return { type: LOGIN_SUCCESS };
}

export function loginFailed(payload: any): LoginFailedAction {
  return { type: LOGIN_FAILED, payload };
}

export function registrationRequest(payload: RegistrationRequestData): RegistrationRequestAction {
  return { type: REGISTRATION_REQUEST, payload };
}

// export function loginSuccess(): LoginSuccessAction {
//   return { type: LOGIN_SUCCESS };
// }

// export function loginFailed(payload: any): LoginFailedAction {
//   return { type: LOGIN_FAILED, payload };
// }

// export function restoreSessionRequest(): RestoreSessionRequestAction {
//   return { type: RESTORE_SESSION_REQUEST };
// }

// export function restoreSessionSuccess(): RestoreSessionSuccessAction {
//   return { type: RESTORE_SESSION_SUCCESS };
// }

// export function restoreSessionFailed(payload: any): RestoreSessionFailedAction {
//   return { type: RESTORE_SESSION_FAILED, payload };
// }
