import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const GoHomeButton = () => {
  return (
    <Link to="/">
      <Button variant="outlined" endIcon={<HomeIcon />}>
        Home
      </Button>
    </Link>
  );
};

export default GoHomeButton;
