import React, { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';
import axios from 'axios';
import Confirm from './Confirm';

const Send = (props) => {
  const [message, setMessage] = useState('');
  const [verifCode, setVerifCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data,
    } = await axios.put(
      'https://30zom53or6.execute-api.us-east-1.amazonaws.com/prod/message/',
      { message }
    );
    setVerifCode(data);
    setMessage('');
  };

  return verifCode ? (
    <div>
      <Confirm verifCode={verifCode} />
    </div>
  ) : (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us your secret message"
        bsSize="lg"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Send;
