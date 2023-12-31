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
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} alt="test" title="green iguana"></CardMedia>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          //style={{ paddingLeft: '1rem', marginTop: '10px', backgroundColor: 'white', opacity: '0.25' }}
        >
          {HeaderText}
        </Typography>

        <Typography
          //Included this to limit the number of lines to 4
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical'
          }}
          variant="body2"
          color="text.secondary"
        >
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
