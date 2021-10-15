import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/button';
import { Grid, GridItem } from '@chakra-ui/layout';
import { getSignals } from '../helpers/data/data';
import SignalCards from '../components/Signals/SignalCards';
import SingalHeader from '../components/Signals/SingalHeader';

const SignalsPage = ({ userToken, setUserToken }) => {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    getSignals(userToken).then((response) => setSignals(response));
  }, []);

  return (
    <>
      <Button onClick={() => setUserToken(null)}>Logout</Button>
      <Grid
        templateColumns='repeat(7, 1fr)'
        templateRows='repeat(10, 1fr)'
        gap={8}
      >
        <SingalHeader />
          {
            signals.map((signal, i) => (
              <GridItem colSpan={7} key={i}>
                <SignalCards
                  alarmNum={signal.alarmNum}
                  eventCodeDesc={signal.eventCodeDesc}
                  pointDesc={signal.pointDesc}
                  signalCode={signal.signalCode}
                  xmit={signal.xmit}
                  siteDate={signal.siteDate}
                />
              </GridItem>
            ))
          }
      </Grid>
    </>
  );
};

SignalsPage.propTypes = {
  userToken: PropTypes.string.isRequired,
  setUserToken: PropTypes.func.isRequired
};

// overflow='hidden'
// boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
// borderWidth='1px'
// margin='auto'

export default SignalsPage;
