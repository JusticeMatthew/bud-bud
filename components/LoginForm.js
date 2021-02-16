import React from 'react';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';

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

export default function LoginForm() {
  const [vis, setVis] = React.useState(false);
  const onSubmit = (values) => {
    console.log(values);
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
              <FormButton
                disabled={!values.username || !values.password ? true : false}
                text='Login'
              />
            </div>
          </form>
        )}
      />
    </div>
  );
}
