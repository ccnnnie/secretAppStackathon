import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <div>
      <Grid container spacing={10} justify="center" alignItems="center">
        <Grid item>
          <Link to="/send">
            <Button size="large">Sending</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/receive">
            <Button size="large">Receiving</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Buttons;
