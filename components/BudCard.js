import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BudCard({ bud, index }) {
  const [expanded, setExpanded] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <Card
      sx={{
        width: 275,
        background: '#1F2833',
        color: 'whitesmoke',
        margin: 2,
      }}
    >
      <CardHeader title={bud.name} />
      <CardContent>
        <Typography variant='body2' color='whitesmoke'>
          Price: {bud.price}
        </Typography>
        <Typography variant='body2' color='whitesmoke'>
          Location: {bud.location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing={true}>
        <ExpandMore
          expand={expanded === index}
          onClick={() => handleExpandClick(index)}
          aria-expanded={expanded === index}
          aria-label='show more'
        >
          <ExpandMoreIcon color='whitesmoke' />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded === -1} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Notes:</Typography>
          <Typography paragraph>{bud.notes}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
