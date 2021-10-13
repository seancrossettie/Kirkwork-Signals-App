import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/button';
import { getSignals } from '../helpers/data/data';
import SignalCards from '../components/SignalCards';

const SignalsPage = ({ userToken, setUserToken }) => {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    getSignals(userToken).then((response) => setSignals(response));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={() => setUserToken(null)}>Logout</Button>
      {
        signals.map((signal, i) => (
            <SignalCards
              key={i}
              id={signal.address}
              alarmNum={signal.alarmNum}
              eventCodeDesc={signal.eventCodeDesc}
              pointDesc={signal.pointDesc}
              signalCode={signal.signalCode}
              xmit={signal.xmit}
              siteDate={signal.siteDate}
            />
        ))
      }
    </div>
  );
};

SignalsPage.propTypes = {
  userToken: PropTypes.string.isRequired,
  setUserToken: PropTypes.func.isRequired
};

export default SignalsPage;
