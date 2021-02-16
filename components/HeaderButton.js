import { withStyles, Button } from '@material-ui/core';

const CssButton = withStyles({
  root: {
    margin: '10px',
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
      backgroundColor: 'rgba(21, 219, 149, 0.8)',
    },
  },
})(Button);

export default function HeaderButton({ text }) {
  return <CssButton variant='contained'>{text}</CssButton>;
}
