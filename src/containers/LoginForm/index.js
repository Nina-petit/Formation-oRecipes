import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';

import { changeLoginInput, logout, submitLogin } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: 'TODO',
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, key) => {
    dispatch(changeLoginInput(key, newValue));
  },
  handleLogin: () => {
    dispatch(submitLogin());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
