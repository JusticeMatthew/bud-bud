import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  withStyles,
  Modal,
  Box,
} from '@material-ui/core';

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

export default function BudCard({ bud }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        raised={false}
        style={{
          backgroundColor: '#1F2833',
          height: 250,
          width: 300,
          margin: 18,
        }}
      >
        <CardContent style={{ height: 175 }}>
          <div className='flex flex-col justify-between'>
            <h2 className='text-light text-2xl self-center'>{bud.name}</h2>
          </div>
          <div className='flex flex-col text-light my-2 text-base'>
            <p>Dispensary: {bud.location}</p>
            <p>Type of Medicine: {bud.type}</p>
            <p>Price: {bud.price}</p>
          </div>
        </CardContent>
        <CardActions className='mx-3'>
          <CssButton onClick={handleOpen}>Details</CssButton>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Card
          raised={false}
          style={{
            backgroundColor: '#1F2833',
            height: 'auto',
            width: 300,
            margin: 18,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CardContent>
            <h2 className='text-light text-xl'>Notes:</h2>
            <p className='text-light'>{bud.notes}</p>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
}
