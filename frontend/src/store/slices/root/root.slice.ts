import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  // user: userReducer,
  // auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
