import { CHANGE_LOGIN_INPUT } from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  nickname: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.settingsKey]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
