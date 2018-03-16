import React, { Component } from 'react';
import './App.css';
// import { secretContent } from "./secret"

class Login extends Component {
  userData={}

  onSignIn = googleUser => {
    console.log("in sign-in")
    var profile = googleUser.getBasicProfile();
    this.userData = { id:profile.getId(),
                 name: profile.getName(),
                 image: profile.getImageUrl(),
                 email: profile.getEmail()
               }
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    alert("user signed in")
  }

  createElements = () => {
    <p>{this.userData.name}</p>
  }

  signOut= () => {
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //   alert('User signed out.');
    // });
  }

  signIn = () => {
    // gapi.load('auth2', function(){
    //   gapi.auth2.init();
    // })
  }


  render() {
    return (
      <div className="login">

        <div class="g-signin2 login-btn"  data-onsuccess={this.onSignIn}>
        </div>
        <div>{this.createElements}</div>
        <a class ="logout" href="#" onClick={this.signOut}>Sign out</a>
      </div>
    );
  }
}

export default Login;
