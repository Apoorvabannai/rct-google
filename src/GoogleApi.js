import React, { Component } from 'react';
import { signIn, signOut } from './actions';
import { connect } from 'react-redux';

class GoogleApi extends Component {
  state= {isUserSignedIn: null};

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '945584351537-hdua2fofev6d31n91fi6f8uos5itgj7d.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({
          isUserSignedIn: this.auth.isSignedIn.get()
        });
        this.auth.isSignedIn.listen(this.signInOutText);
      })
    });
  };

  signOutUserofGoogle = () => {
    return this.auth.signOut();
  };

  signInUsertoGoogle = () => {
    return this.auth.signIn();
  };

  userSignedIn = () => {
    const userSignedIn =  this.state.isUserSignedIn;
    const googleSignout = <button onClick={this.signOutUserofGoogle} className='ui red google button'> <i className='google icon'/> Sign Out  </button>;
    const googleSignin = <button onClick={this.signInUsertoGoogle} className='ui blue google button'> <i className='google icon' /> Sign In with Google</button>;
    return userSignedIn ? googleSignout : googleSignin;
  };

  signInOutText = (isSignedIn) => {
    this.setState({ isUserSignedIn: this.auth.isSignedIn.get()});
  };

  render(){
    console.log('this.propsthis.props', this.props);
    return(
      <div>
        {this.userSignedIn()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    state: state
  }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleApi);

// export {
//   connect(mapStateToProps)(GoogleApi) as default
// }
