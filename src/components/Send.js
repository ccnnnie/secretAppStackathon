import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

const Send = () => {
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data,
    } = await axios.put(
      'https://30zom53or6.execute-api.us-east-1.amazonaws.com/prod/message/',
      { message }
    );
    history.push({
      pathname: '/send/verification',
      state: { verifCode: data },
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2">What is Your Message?</Typography>
      <form method="PUT" action="/" onSubmit={handleSubmit}>
        <TextField
          required
          id="messageInput"
          name="messageInput"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us your secret message"
        />
        <Button type="submit" variant="outlined" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Send;
