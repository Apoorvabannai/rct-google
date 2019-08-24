import React, { Component } from 'react';
import { signIn, signOut } from './actions';
import { connect } from 'react-redux';

class GoogleApi extends Component {

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '945584351537-hdua2fofev6d31n91fi6f8uos5itgj7d.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.signInOrSignOut(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.signInOrSignOut);
      })
    });
  };

  signOutUserofGoogle = () => {
    return this.auth.signOut();
  };

  signInUsertoGoogle = () => {
    return this.auth.signIn();
  };

  renderOauthButton = () => {
    const userSignedIn =  this.props.isSignedIn;
    // if(userSignedIn === null){
    //   return '';
    // }
    const googleSignout = <button onClick={this.signOutUserofGoogle} className='ui red google button'> <i className='google icon'/> Sign Out  </button>;
    const googleSignin = <button onClick={this.signInUsertoGoogle} className='ui blue google button'> <i className='google icon' /> Sign In with Google</button>;
    // return userSignedIn ? googleSignout : googleSignin;
    // Nesting terinary
    // Then below is to check if null return empty string, or if some value then return corresponding
    return userSignedIn === null ? '' : userSignedIn ? googleSignout : googleSignin;
  };

  signInOrSignOut = (isSignedIn) => {
    // this.auth.currentUser.get().getBasicProfile().getEmail() --> For Email.
    return isSignedIn ?  this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut()  
  };

  render(){
    return(
      <div>
        {this.renderOauthButton()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authState.isSignedIn
  }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleApi);
