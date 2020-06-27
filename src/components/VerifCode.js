import React from 'react';
import { useLocation } from 'react-router-dom';
import Buttons from './Buttons';
import {
  TextField,
  InputAdornment,
  Container,
  Typography,
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GoHomeButton from './GoHomeButton';

const Confirm = () => {
  const location = useLocation();
  const verifCode = location.state ? location.state.verifCode : '';
  // const verifCode = 'e08ca3f5-2c0d-490e-b0a7-1a22af9f38c4';
  return verifCode ? (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3">This is your verification code: </Typography>
        {/* <Typography variant="h4" style={{ border: '1px black solid' }}>
          {verifCode}
        </Typography> */}
        <TextField
          disabled
          variant="outlined"
          defaultValue={verifCode}
          fullWidth
          InputProps={{
            style: { fontSize: 30, textAlign: 'center' },
            endAdornment: (
              <InputAdornment position="end">
                <FileCopyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="caption">
          Give this to whoever should have access to your secret.
        </Typography>
        <GoHomeButton />
      </Container>
    </div>
  ) : (
    <div>
      Please choose one of the below options.
      <Buttons />
    </div>
  );
};

export default Confirm;
