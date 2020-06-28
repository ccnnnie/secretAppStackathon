import React, { useState } from 'react';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PublishIcon from '@material-ui/icons/Publish';

const Receive = () => {
  const history = useHistory();

  const [verifCode, setVerifCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://30zom53or6.execute-api.us-east-1.amazonaws.com/prod/message/${verifCode}`
    );
    history.push({
      pathname: '/receive/message',
      state: { message: data },
    });
    await axios.delete(
      `https://30zom53or6.execute-api.us-east-1.amazonaws.com/prod/message/${verifCode}`
    );
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Submit Code to View Secret.</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="messageInput"
          name="messageInput"
          type="text"
          value={verifCode}
          onChange={(e) => setVerifCode(e.target.value)}
          placeholder="What is your verification code?"
        />
        <Button type="submit" variant="outlined" endIcon={<PublishIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Receive;
