import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSigninStart, emailSigninStart } from '../../redux/user/user.action';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';


const SignIn = ({emailSigninStart}) => {

  const [userCredentials,setCredentials] =  useState({email:'', password:''}) 
  
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    

    emailSigninStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };

    
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span style={{color: 'red', fontSize: '35px'}}>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
              type='button'
              onClick={googleSigninStart}
            isgooglesignin={true}
            >
               Google SIGN
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }


const mapDispatchToProps = dispatch => ({
 googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
