import { LOGOUT, LOGIN } from '../constants';

export default function user(state, { type, payload, id}) {
  switch (type) {
  case LOGIN: 
    let {loggedUser, token} = payload;
    let log = {...state};
    console.log(payload);
    log.token = token;
    log.isLoggedIn = true;
    log.user = {id: loggedUser._id, name: loggedUser.name, email: loggedUser.email, lists: loggedUser.lists};
    return log;
  default:
    return state;
  }
}