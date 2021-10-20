import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Flex, Heading, Spacer
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const NavBar = ({
  userToken, setUserToken
}) => {
  const handleLogout = () => {
    if (userToken) {
      setUserToken(null);
    }
  };

  return (
    <Flex mb={8} p='5' boxShadow='lg' w='auto'>
      <Box p='2'>
        <Heading fontSize='2xl'> My Singals</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme='teal' mr='4' onClick={() => handleLogout()}>Logout</Button>
      </Box>
    </Flex>
  );
};

NavBar.propTypes = {
  userToken: PropTypes.string.isRequired,
  setUserToken: PropTypes.func.isRequired,
};

export default NavBar;
