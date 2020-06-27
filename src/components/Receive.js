import React, { useState } from 'react';
import { Form, Input, Button } from 'reactstrap';
import axios from 'axios';
import Secret from './Secret';

const Receive = () => {
  const [verifCode, setVerifCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://30zom53or6.execute-api.us-east-1.amazonaws.com/prod/message/${verifCode}`
    );
    setMessage(data);
  };

  return message ? (
    <Secret message={message} />
  ) : (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={verifCode}
        onChange={(e) => setVerifCode(e.target.value)}
        placeholder="What is the verification code?"
        bsSize="lg"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Receive;
