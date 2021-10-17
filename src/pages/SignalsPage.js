import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@chakra-ui/layout';
import { getSignals } from '../helpers/data/data';
import SignalCards from '../components/Signals/SignalCards';
import SingalHeader from '../components/Signals/SingalHeader';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Footer/Footer';

const SignalsPage = ({ userToken, setUserToken }) => {
  const [signals, setSignals] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [max, setMax] = useState(0);

  useEffect(() => {
    getSignals(userToken, pageNumber, pageSize).then((response) => {
      setSignals(response.items);
      setMax(response.numPages);
    });
  }, []);

  return (
    <>
      <NavBar userToken={userToken} setUserToken={setUserToken} pageSize={pageSize} setPageSize={setPageSize} />
      <Grid
        templateColumns='repeat(7, 1fr)'
        templateRows='repeat(12, 1fr)'
        gap={8}
        m='2rem'
      >
        <SingalHeader />
          { signals
            ? signals.map((signal, i) => (
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
            : ''
          }
      </Grid>
      <Footer
          userToken={userToken}
          setPageSize={setPageSize}
          pageSize={pageSize}
          signals={signals}
          setSignals={setSignals}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          max={max}
          setMax={setMax}
        />
    </>
  );
};

SignalsPage.propTypes = {
  userToken: PropTypes.string.isRequired,
  setUserToken: PropTypes.func.isRequired
};

export default SignalsPage;
