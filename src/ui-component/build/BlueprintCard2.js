import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, redirect } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BlueprintCard2({ HeaderText, Caption, image }) {
  const navigator = useNavigate();

  const handleNavigation = () => {
    navigator('/designer/' + HeaderText);
    //redirect('/designer/' + HeaderText);
  };

  //"/static/images/cards/contemplative-reptile.jpg"
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} alt="test" title="green iguana">
        {/* <img src={image} alt={image} /> */}
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {HeaderText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Caption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            handleNavigation();
          }}
        >
          Details...
        </Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

BlueprintCard2.propTypes = {
  HeaderText: PropTypes.string,
  Caption: PropTypes.string,
  image: PropTypes.string
};

export default BlueprintCard2;
