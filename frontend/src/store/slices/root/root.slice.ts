import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../auth/auth.slice';
import { userReducer } from '../user/user.slice';

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
