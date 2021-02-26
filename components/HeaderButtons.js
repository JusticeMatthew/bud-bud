import { withStyles, Button } from '@material-ui/core';

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
      backgroundColor: 'rgba(21, 219, 149, 0.8)',
    },
  },
})(Button);

const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('BudBud_token');
    localStorage.removeItem('BudBud_user');
  }
};

export function HeaderButton({ text }) {
  return <CssButton variant='contained'>{text}</CssButton>;
}

export function HeaderLogoutButton({ text }) {
  return (
    <CssButton onClick={logout} variant='contained'>
      {text}
    </CssButton>
  );
}
