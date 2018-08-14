import React from 'react';
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {updateUser} from "../../actions/user-action";
import Helpers from "../../service/Helpers";

class Logout extends React.Component {
  componentDidMount() {
    this.props.onUserUpdate([]);
    Helpers.removeLocalStorageData('USER');
    this.props.history.replace('/');
  }
  render() {
    return (<div/>)
  }
}

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
export default connect(mapStateToProps, mapActionToProps)(Logout);
