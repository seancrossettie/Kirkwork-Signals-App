import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { useFormik } from 'formik';
import { getAuthToken } from '../helpers/data/data';

function LoginPage({ setUserToken }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      getAuthToken(values.email, values.password).then((token) => {
        setUserToken(token);
      });
    }
  });

  return (
      <Box px='10%' flexDirection='column' marginTop='2rem'>
        <Text fontSize='2xl'>Login</Text>
        <form onSubmit={formik.handleSubmit}>
          <Input name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} />
          <Input name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} />
          <Button colorScheme='teal' type='submit'>Login</Button>
        </form>
      </Box>
  );
}

LoginPage.propTypes = {
  userToken: PropTypes.string,
  setUserToken: PropTypes.func.isRequired
};

export default LoginPage;
