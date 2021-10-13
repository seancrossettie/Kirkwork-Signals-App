import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/button';
import { getSignals } from '../helpers/data/data';
import SignalCards from '../components/SignalCards';

const SignalsPage = ({ userToken }) => {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    getSignals(userToken).then((response) => setSignals(response));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => console.warn(signals)}>Test</Button>
      {
        signals.map((signal, i) => (
            <SignalCards
              key={i}
              id={signal.address}
            />
        ))
      }
    </div>
  );
};

SignalsPage.propTypes = {
  userToken: PropTypes.string.isRequired
};

export default SignalsPage;
