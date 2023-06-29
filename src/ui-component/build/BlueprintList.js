import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import BlueprintCard from './BlueprintCard';
import BlueprintCard2 from './BlueprintCard2';
import { blueprints } from 'dummy_data/blueprintsDummy';

function BlueprintList(props) {
  return (
    //lg={4} md={6} sm={6} xs={3}
    <Grid container spacing={1.5}>
      {blueprints.map((blueprint, index) => {
        return (
          <Grid item lg={3} md={6} sm={8} xs={12} key={index}>
            {/* <BlueprintCard HeaderText={blueprint.name} Caption={blueprint.description} / */}
            <BlueprintCard2 HeaderText={blueprint.name} Caption={blueprint.description} image={blueprint.image} />
          </Grid>
        );
      })}
    </Grid>

    //{blueprints.map((blueprint, index) =>{<div>Hello World </div>}});
  );
}

BlueprintList.propTypes = {};

export default BlueprintList;
