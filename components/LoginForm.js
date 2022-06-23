// Functionality
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import Lottie from 'lottie-react';
// Style
import { withStyles, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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

export default function LoginForm({ setLoginError }) {
  const [vis, setVis] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (values) => {
    setLoading(true);
    if (typeof window !== 'undefined') {
      axios
        .post('/api/login-router', values)
        .then((res) => {
          localStorage.setItem('BudBud_token', res.data.token);
          localStorage.setItem('BudBud_user', res.data.username);
          router.push(`/profile/${res.data.username}`);
          setLoading(false);
        })
        .catch((err) => {
          setLoginError(err.response.data.message);
          setLoading(false);
        });
    }
  };

  const handleClickShowPassword = () => {
    setVis(!vis);
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
    <div
      className='w-80 md:w-2/3 lg:1/2 h-auto bg-dark text-light p-10 flex
     flex-col justify-center items-center rounded pt-12 pb-12 m-12'
    >
      <h1 className='text-4xl font-sans'>Login: </h1>
      <Form
        onSubmit={onSubmit}
        initialValues={initialFormValues}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <CssTextField
              id='username'
              label='Username'
              name='username'
              variant='outlined'
              margin='normal'
            />
            <CssTextField
              id='password'
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
            <div className='w-full h-20 flex justify-center items-end'>
              <CssButton
                disabled={!values.username || !values.password ? true : false}
                text='Login'
                type='submit'
              >
                Login
              </CssButton>
            </div>
          </form>
        )}
      />
    </div>
  );
}
