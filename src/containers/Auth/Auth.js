import React from 'react';
import './/login.css';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {updateUser} from "../../actions/user-action";
import Helpers from "../../service/Helpers";

class Auth extends React.Component {

  responseFacebook = (response) => {
    let user = {
      'email': response.email,
      'last_name': response.name,
      'first_name': response.name,
      'social_id': response.userID,
      'image_url': response.picture.data.url,
    };
    this.props.onUserUpdate(user);
    Helpers.setLocalStorageData('USER', user);
    this.props.history.goBack();
  };

  responseGoogle = (response) => {
    let user = {
      'email': response.profileObj.email,
      'last_name': response.profileObj.familyName,
      'first_name': response.profileObj.givenName,
      'social_id': response.profileObj.googleId,
      'image_url': response.profileObj.imageUrl,
    };
    this.props.onUserUpdate(user);
    Helpers.setLocalStorageData('USER', user);
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="social-login">
        {
          (!this.props.user.first_name) &&
          <div>
            <div className={'facebook-btn'}>
              <FacebookLogin
                appId="705087453164667"
                autoLoad={false}
                fields="name,email,picture"
                size='small'
                textButton='Login With Facebook'
                callback={this.responseFacebook}

              />
            </div>
            <div className={'google-btn'}>
              <GoogleLogin
                clientId="840640431104-65qqvh4bn906v14qnabp8r7h799b6p80.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}

              />
            </div>
          </div>
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

export default connect(mapStateToProps, mapActionToProps)(Auth);



