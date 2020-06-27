import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Are You Sending or Receiving a Secret?</h1>
      <div>
        <Link to="/send">
          <Button outline color="secondary">
            Sending
          </Button>
        </Link>
        <Link to="/receive">
          <Button outline color="secondary">
            Receiving
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
