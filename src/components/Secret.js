import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import GoHomeButton from './GoHomeButton';
import { Container, Typography } from '@material-ui/core';

const Secret = (props) => {
  const history = useHistory();
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
        <div style={{ padding: '1rem' }}>
          <div>
            <Typography variant="h3">This is your secret:</Typography>
            <Typography variant="h4" id="blur">
              {message}
            </Typography>
          </div>
        </div>
      )}
      <GoHomeButton />
    </Container>
  ) : (
    <div>{history.push('/')}</div>
  );
};

export default Secret;
