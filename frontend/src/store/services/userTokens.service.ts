export const USER_ACCESS_TOKEN_KEY = 'userAccessToken';

export function getUserAccessToken() {
  return localStorage.getItem(USER_ACCESS_TOKEN_KEY);
}

export function setUserAccessToken(token: string) {
  localStorage.setItem(USER_ACCESS_TOKEN_KEY, token);
}

export function deleteUserAccessToken() {
  localStorage.removeItem(USER_ACCESS_TOKEN_KEY);
}
