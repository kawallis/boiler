import { LOGIN, LOGOUT} from '../constants';

export function logout(payload) {
  return {
    type: LOGOUT,
    payload
  };
}

export function login(payload) {
  return {
    type: LOGIN,
    payload
  };
}