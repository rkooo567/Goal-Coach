import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
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

  signUp() {
    console.log(this.state);
    const email = this.state.email
    const password = this.state.password
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('sign up error : ', error);
        this.setState({
          error: error
        })
      })
  }

  render() {
    return (
      <div className='form-inline' style={{margin:'5%'}}>
        <h2>Sign up</h2>
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
                this.signUp();
              }
            }}
            onChange={event => this.setState({
              password: event.target.value
            })}
          />
          <button
            className='btn btn-primary'
            type='button'
            onClick={() => this.signUp()}
          >
            Sign up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Sign In</Link></div>
      </div>
    )
  }
}

export default SignUp;
