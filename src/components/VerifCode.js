import React, { useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  TextField,
  InputAdornment,
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GoHomeButton from './GoHomeButton';

const Confirm = () => {
  const history = useHistory();
  const location = useLocation();
  const verifCode = location.state ? location.state.verifCode : '';

  const verifCodeRef = useRef(null);

  const copyToClipboard = async (e) => {
    await navigator.clipboard.writeText(verifCode);
  };

  return verifCode ? (
    <div>
      <Container maxWidth="md">
        <Typography variant="h3">This is your verification code: </Typography>
        <TextField
          disabled
          ref={verifCodeRef}
          variant="outlined"
          defaultValue={verifCode}
          fullWidth
          InputProps={{
            style: { fontSize: 30, textAlign: 'center' },
            endAdornment: (
              <InputAdornment position="end">
                <Button>
                  <FileCopyIcon onClick={copyToClipboard} />
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <div style={{ padding: '2rem' }}>
          <div>
            <Typography variant="caption">
              Share this code with a friend so they can see your secret message.
            </Typography>
          </div>
          <div>
            <Typography variant="caption">
              Secret can only be viewed once. Secret must be viewed within 2
              days.
            </Typography>
          </div>
        </div>
        <GoHomeButton />
      </Container>
    </div>
  ) : (
    <div>{history.push('/')}</div>
  );
};

export default Confirm;
