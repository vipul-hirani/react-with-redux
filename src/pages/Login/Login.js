import React from 'react';
import '../Cart/cart.css';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {updateUser} from "../../actions/user-action";
import Helpers from "../../service/Helpers";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params);
    this.state = {
      if_fb_login: false
    };
  }

  responseFacebook = (response) => {
    this.props.onUserUpdate(response);
    Helpers.setLocalStorageData('USER', response)
  };

  fb_login = () => {
    this.setState({
      if_fb_login: true
    })
  };
  logout = () => {
    this.setState({
      if_fb_login: false
    })
    this.props.onUserUpdate([])
    Helpers.removeLocalStorageData('USER');
  }
   responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div className="shopping-cart">
        {
          (this.state.if_fb_login === true && !this.props.user.name) &&
          <div>
            <FacebookLogin
              appId="705087453164667"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook}
            />

            <GoogleLogin
              clientId="840640431104-65qqvh4bn906v14qnabp8r7h799b6p80.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
          </div>
        }
        {
          (!this.props.user.name && this.state.if_fb_login === false) &&
          <button onClick={this.fb_login}>Facebook Login</button>
        }
        {
          this.props.user.name &&
          <button onClick={this.logout}>
            Logout
          </button>
        }
      </div>
    );
  }
}

// updateUser


const userSelector = createSelector(
  state => state.user,
  user => user,
);

const mapStateToProps = createSelector(
  userSelector,
  (user) => ({
    user
  })
);

const mapActionToProps = {
  onUserUpdate: updateUser
};

export default connect(mapStateToProps, mapActionToProps)(Login);
