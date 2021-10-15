import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@chakra-ui/layout';
import { getSignals } from '../helpers/data/data';
import SignalCards from '../components/Signals/SignalCards';
import SingalHeader from '../components/Signals/SingalHeader';
import NavBar from '../components/Navigation/NavBar';
// import PaginationCrumbs from '../components/Navigation/PaginationCrumbs';

const SignalsPage = ({ userToken, setUserToken }) => {
  const [signals, setSignals] = useState([]);
  // const [pageNumber, setPageNumber] = useState('1');

  useEffect(() => {
    getSignals(userToken, 1).then((response) => setSignals(response));
  }, []);

  return (
    <>
      <NavBar userToken={userToken} setUserToken={setUserToken} />
      <Grid
        templateColumns='repeat(7, 1fr)'
        templateRows='repeat(12, 1fr)'
        gap={8}
        m='2rem'
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
        {/* <GridItem rowSpan={2} colSpan={7}>
          <PaginationCrumbs
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </GridItem> */}
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
