import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions/actions';
import Login from '../components/Login';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const LoginContainer = connect(mapStateToProps,mapDispatchtoProps)(Login);

export default LoginContainer;