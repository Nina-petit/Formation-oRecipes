export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const changeLoginInput = (settingsKey, newValue) => ({
  type: CHANGE_LOGIN_INPUT,
  settingsKey: settingsKey,
  newValue: newValue,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const logout = () => ({
  type: LOGOUT,
});
export const loginSuccess = () => ({});
export const loginError = () => ({});
