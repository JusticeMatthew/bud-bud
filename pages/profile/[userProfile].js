import React, { useState } from 'react';
import Head from 'next/head';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles,
} from '@material-ui/core';
import axios from 'axios';

import useUser from '../../hooks/useUser';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoadingProfile from '../../components/LoadingProfile';
import ProfileError from '../../components/ProfileError';
import BudCard from '../../components/BudCard';

const CssButton = withStyles({
  root: {
    width: '100px',
    backgroundColor: '#15DB95',
    color: '#1F2833',
    fontWeight: 'bold',
    '&:disabled': {
      backgroundColor: '#f2f2f2',
      color: '#1F2833',
    },
    '&:active': {
      backgroundColor: '#15DB95',
    },
    '&:hover': {
      backgroundColor: '#11c988',
    },
  },
})(Button);

const CssTextField = withStyles(() => ({
  root: {
    marginTop: 18,
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

export default function UserProfile() {
  const { user, isLoading, isError, mutate } = useUser();

  const [open, setOpen] = useState(false);
  const [newbud, setNewbud] = useState({
    name: '',
    location: '',
    type: '',
    price: '',
    notes: '',
  });

  const handleChange = (e) => {
    setNewbud({
      ...newbud,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setNewbud({
      name: '',
      location: '',
      type: '',
      price: '',
      notes: '',
    });
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!newbud.name) {
      window.alert('Please enter at least a name');
    } else {
      axios
        .put('/api/addbud-router', newbud, {
          headers: {
            Authorization:
              typeof window !== 'undefined' &&
              localStorage.getItem('BudBud_token'),
            Data:
              typeof window !== 'undefined' &&
              localStorage.getItem('BudBud_user'),
          },
        })
        .then((res) => {
          console.log('Success! Mr.', user.username, res.data);
          setOpen(false);
          setNewbud({
            name: '',
            location: '',
            type: '',
            price: '',
            notes: '',
          });
          mutate(user);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  };

  if (isLoading) {
    return <LoadingProfile />;
  }

  if (isError && !isLoading) {
    return <ProfileError />;
  }

  return (
    <div className='container'>
      <Head>
        <title>{`${user.name}'s Buds`}</title>
      </Head>
      <Header />
      <main className='flex-grow flex-wrap w-full flex'>
        <div className='flex flex-row w-full h-20 justify-between mx-10 items-center'>
          <h1 className='text-lg m-8 bg-dark text-light rounded px-2 py-1 sm:text-3xl text-center'>
            Welcome {user.name}
          </h1>
          <div className='m-8'>
            <CssButton
              variant='contained'
              disableElevation={true}
              onClick={handleClickOpen}
              color='primary'
            >
              Add Bud
            </CssButton>
          </div>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle
              style={{ backgroundColor: '#1F2833', color: '#f2f2f2' }}
            >
              Add Bud
            </DialogTitle>
            <DialogContent style={{ backgroundColor: '#1F2833' }}>
              <CssTextField
                autoFocus
                required={true}
                name='name'
                margin='dense'
                id='name'
                label='Name'
                fullWidth
                variant='outlined'
                value={newbud.name}
                onChange={handleChange}
                inputProps={{ maxLength: 15 }}
              />
              <CssTextField
                margin='dense'
                name='location'
                id='location'
                label='Location'
                fullWidth
                variant='outlined'
                value={newbud.location}
                onChange={handleChange}
                inputProps={{ maxLength: 20 }}
              />
              <CssTextField
                margin='dense'
                name='type'
                id='type'
                label='Type of Medicine'
                fullWidth
                variant='outlined'
                value={newbud.type}
                onChange={handleChange}
                inputProps={{ maxLength: 20 }}
              />
              <CssTextField
                margin='dense'
                name='price'
                id='price'
                label='Price'
                fullWidth
                variant='outlined'
                value={newbud.price}
                onChange={handleChange}
                inputProps={{ maxLength: 10 }}
              />
              <CssTextField
                margin='dense'
                name='notes'
                id='notes'
                label='Notes'
                fullWidth
                variant='outlined'
                value={newbud.notes}
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions
              style={{ backgroundColor: '#1F2833', color: '#f2f2f2' }}
            >
              <Button
                variant='outlined'
                onClick={handleClose}
                color='secondary'
              >
                Cancel
              </Button>
              <CssButton onClick={handleSubmit}>Add</CssButton>
            </DialogActions>
          </Dialog>
        </div>

        <div className='h-full w-full flex flex-wrap justify-center'>
          {user.meds.map((bud) => (
            <BudCard bud={bud} key={bud.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
