import { withStyles, Button } from '@material-ui/core';

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

export default function FormButton({ text, disabled }) {
  return (
    <CssButton variant='contained' disabled={disabled}>
      {text}
    </CssButton>
  );
}
