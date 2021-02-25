// Functionality
import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
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

export default function LoginForm() {
  const [vis, setVis] = React.useState(false);
  const router = useRouter();

  const onSubmit = (values) => {
    if (typeof window !== 'undefined') {
      axios
        .post('/api/login-router', values)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          router.push(`/profile/${res.data.username}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClickShowPassword = () => {
    setVis(!vis);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className='md:w-2/3 lg:1/2 h-1/2 bg-dark text-light p-10 flex
     flex-col justify-center items-center rounded'
    >
      <h1 className='text-4xl font-sans'>Login: </h1>
      <Form
        onSubmit={onSubmit}
        initialValues={initialFormValues}
        render={({ handleSubmit, values }) => (
          <form
            onSubmit={handleSubmit}
            noValidate
            className='sm:w-3/4 lg:w-2/3'
          >
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
