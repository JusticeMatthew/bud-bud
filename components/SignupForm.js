// Functionality
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-final-form';
import { TextField, makeValidate } from 'mui-rff';
import Lottie from 'lottie-react';
// Style
import { withStyles, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import schema from '../validation/schema';

// Add a field for first name :)
const initialFormValues = {
  username: '',
  password: '',
};

const CssTextField = withStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      '& input': {
        color: '#f2f2f2',
      },
      '& fieldset': {
        borderColor: '#f2f2f2',
      },
      '&:hover fieldset': {
        borderColor: '#15DB95',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#15DB95',
      },
    },
    '& .MuiFormLabel-root': {
      color: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      color: '#f2f2f2',
    },
  },
}))(TextField);

const CssButton = withStyles({
  root: {
    padding: '10px 40px',
    backgroundColor: '#15DB95',
    color: '#1F2833',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    '&:disabled': {
      backgroundColor: '#f2f2f2',
      color: '#1F2833',
    },
    '&:active': {
      backgroundColor: '#15DB95',
    },
    '&:hover': {
      backgroundColor: 'rgba(21, 219, 149, 0.8)',
    },
  },
})(Button);

const validate = makeValidate(schema);

export default function SignupForm({ setSignupError }) {
  const [vis, setVis] = useState(false);
  const [confirmVis, setConfirmVis] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (values) => {
    if (typeof window !== 'undefined') {
      setLoading(true);
      axios
        .post('/api/signup-router', values)
        .then((res) => {
          localStorage.setItem('BudBud_token', res.data.token);
          localStorage.setItem('BudBud_user', res.data.username);
          router.push(`/profile/${res.data.username}`);
          setLoading(false);
        })
        .catch((err) => {
          setSignupError(err.response.data.message);
          setLoading(false);
        });
    }
  };

  const handleClickShowPassword = () => {
    setVis(!vis);
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmVis(!confirmVis);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return loading ? (
    <Lottie
      animationData={require('../public/spinner.json')}
      loop={true}
      style={{ width: '40%' }}
    />
  ) : (
    <div className='md:w-2/3 lg:1/2 h-auto bg-dark text-light p-10 flex flex-col justify-center items-center rounded pt-12 pb-12 m-12 transition-transform duration-1000 ease-linear'>
      <h1 className='text-4xl font-sans'>Signup: </h1>
      <Form
        onSubmit={onSubmit}
        initialValues={initialFormValues}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className='sm:w-3/4 lg:w-2/3'>
            <CssTextField
              id='name'
              label='First Name'
              name='name'
              variant='outlined'
              margin='normal'
            />
            <CssTextField
              id='username'
              label='Username'
              name='username'
              variant='outlined'
              margin='normal'
            />
            <CssTextField
              id='password'
              autoComplete='new-password'
              label='Password'
              name='password'
              variant='outlined'
              margin='normal'
              type={vis ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {vis ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <CssTextField
              id='password confirmation'
              autoComplete='new-password'
              label='Confirm Password'
              name='passwordConfirmation'
              variant='outlined'
              margin='normal'
              type={confirmVis ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {confirmVis ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className='w-full h-20 flex justify-center items-end'>
              <CssButton
                disabled={
                  !values.password ||
                  !values.username ||
                  !values.passwordConfirmation ||
                  values.password !== values.passwordConfirmation
                    ? true
                    : false
                }
                text='Signup'
                variant='contained'
                type='submit'
              >
                Signup
              </CssButton>
            </div>
          </form>
        )}
      />
    </div>
  );
}
