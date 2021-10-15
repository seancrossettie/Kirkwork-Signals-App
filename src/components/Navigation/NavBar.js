import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const NavBar = ({ userToken, setUserToken }) => {
  const handleLogout = () => {
    if (userToken) {
      setUserToken(null);
    }
  };

  return (
    <Box display='flex' flexDirection='row' m='2rem'>
      <Text fontSize="2xl" mr='auto'> My Singals</Text>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </Box>
  );
};

NavBar.propTypes = {
  userToken: PropTypes.string.isRequired,
  setUserToken: PropTypes.func.isRequired
};

export default NavBar;
