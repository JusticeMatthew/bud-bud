import React from 'react';
import { Form } from 'react-final-form';
import { TextField, makeValidate } from 'mui-rff';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';

import schema from '../validation/schema';
import FormButton from './FormButton';

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

const validate = makeValidate(schema);

export default function LoginForm() {
  const [vis, setVis] = React.useState(false);
  const [confirmVis, setConfirmVis] = React.useState(false);

  const onSubmit = (values) => {
    console.log(values);
    axios
      .post('/api/registration', values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
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

  console.log(validate.error);

  return (
    <div
      className='md:w-2/3 lg:1/2 h-3/5 bg-dark text-light p-10 flex
     flex-col justify-center items-center rounded'
    >
      <h1 className='text-4xl font-sans'>Signup: </h1>
      <Form
        onSubmit={onSubmit}
        initialValues={initialFormValues}
        validate={validate}
        render={({ handleSubmit, values, pristine }) => (
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
            <CssTextField
              id='password confirmation'
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
              <FormButton
                disabled={
                  !values.password ||
                  !values.username ||
                  !values.passwordConfirmation ||
                  values.password !== values.passwordConfirmation
                    ? true
                    : false
                }
                text='Signup'
              />
            </div>
          </form>
        )}
      />
    </div>
  );
}
