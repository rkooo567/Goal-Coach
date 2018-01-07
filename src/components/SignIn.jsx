import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn(e) {
    console.log('sign in requested');
    console.log('state:', this.state);
    const email = this.state.email;
    const password = this.state.password;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error: error});
      });
  }

  render() {
    return (
      <div className='form-inline' style={{margin:'5%'}}>
        <h2>Sign in</h2>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='email'
            onKeyPress={event => {
              if (event.key === 'Enter'){
                this.signIn();
              }
            }}
            onChange={event => this.setState({
              email: event.target.value
            })}
          />
          <input
            type='password'
            className='form-control'
            style={{marginRight: '5px'}}
            placeholder='password'
            onKeyPress={event => {
              if (event.key === 'Enter'){
                this.signIn();
              }
            }}
            onChange={event => this.setState({
              password: event.target.value
            })}
          />
          <button
            className='btn btn-primary'
            type='button'
            onClick={() => this.signIn()}
          >
            Sign in
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>You don't have your id?</Link></div>
      </div>
    )
  }
}

export default SignIn;
