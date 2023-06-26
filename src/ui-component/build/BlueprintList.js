import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import BlueprintCard from './BlueprintCard';
import BlueprintCard2 from './BlueprintCard2';
import { blueprints } from 'dummy_data/blueprintsDummy';

function BlueprintList(props) {
  return (
    <Grid container spacing={0.5}>
      {blueprints.map((blueprint, index) => {
        return (
          <Grid item xs={3} key={index}>
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
