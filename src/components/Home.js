import React from 'react';
import Buttons from './Buttons';
import { Container, Typography, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Home = () => {
  return (
    <div>
      <Container>
        <Typography variant="h2" className="typewriter">
          Are You Sending or Receiving a Secret?
        </Typography>
        <Buttons />
        <div style={{ paddingTop: '10rem' }}>
          <Container maxWidth="xs">
            <Typography variant="caption" paragraph={true}>
              Secret App is a serverless web application built with AWS Lambda,
              Amazon API Gateway, and Amazon Dynamodb, and with React and
              Material UI on the front-end.
            </Typography>
            <Typography variant="caption" paragraph={true}>
              A user's secret is not saved to the database in plaintext. It is
              encrypted with 128-bit AES encryption (using the built-in Node.js
              crypto module). When a user inputs a valid verification code, the
              secret is retrieved from the database and decrypted for the user.
            </Typography>
            <Typography variant="caption" paragraph={true}>
              Once a secret has been viewed, it will be destroyed. The code will
              not work again.
            </Typography>
            <Typography variant="caption" paragraph={true}>
              Secrets that have not been viewed within 2 days will be
              automatically deleted.
            </Typography>
            <Typography variant="caption" paragraph={true}>
              <Link
                href="https://github.com/connielok/secretAppStackathon"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon color="secondary" />
              </Link>
            </Typography>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Home;
