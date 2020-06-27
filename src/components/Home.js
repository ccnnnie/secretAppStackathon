import React from 'react';
import Buttons from './Buttons';
import { Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h1">
          Are You Sending or Receiving a Secret?
        </Typography>
        <Buttons />
      </Container>
    </div>
  );
};

export default Home;
