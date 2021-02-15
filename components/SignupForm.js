import React from 'react';
import { Form } from 'react-final-form';
import { TextField, makeValidate } from 'mui-rff';
import { withStyles } from '@material-ui/core';

import Button from './Button';
import schema from '../validation/schema';

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
  },
}))(TextField);

const validate = makeValidate(schema);

export default function LoginForm() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div
      className='md:w-2/3 lg:1/2 h-3/5 bg-dark text-light p-10 flex
     flex-col justify-center items-center rounded'
    >
      <h1 className='text-4xl'>Signup: </h1>
      <Form
        onSubmit={onSubmit}
        initialValues={initialFormValues}
        validate={validate}
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
            />
            <CssTextField
              id='password confirmation'
              label='Confirm Password'
              name='passwordConfirmation'
              variant='outlined'
              margin='normal'
            />
            <div className='w-full flex justify-center'>
              <Button text='Submit' width='w-36' />
            </div>
          </form>
        )}
      />
    </div>
  );
}
