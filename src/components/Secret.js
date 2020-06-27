import React from 'react';
import { useLocation } from 'react-router-dom';
import Buttons from './Buttons';
import GoHomeButton from './GoHomeButton';
import { Container, Typography } from '@material-ui/core';

const Secret = (props) => {
  const location = useLocation();
  const message = location.state ? location.state.message : '';
  const errorMessage = message.errorMessage;
  return message ? (
    <Container maxWidth="md">
      {errorMessage ? (
        <Typography variant="h4">
          Sorry, secret not found or has already been seen.
        </Typography>
      ) : (
        <div>
          <Typography variant="h3">This is your secret:</Typography>
          <Typography variant="h4" id="blur">
            {message}
          </Typography>
        </div>
      )}
      <GoHomeButton />
    </Container>
  ) : (
    <div>
      Please choose one of the below options.
      <Buttons />
    </div>
  );
};

export default Secret;
