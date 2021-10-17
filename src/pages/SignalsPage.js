import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, GridItem } from '@chakra-ui/layout';
import { getSignals } from '../helpers/data/data';
import SignalCards from '../components/Signals/SignalCards';
import SingalHeader from '../components/Signals/SingalHeader';
import NavBar from '../components/Navigation/NavBar';
import PageSizeSelect from '../components/Navigation/PageSizeSelect';
// import PaginationCrumbs from '../components/Navigation/PaginationCrumbs';

const SignalsPage = ({ userToken, setUserToken }) => {
  const [signals, setSignals] = useState([]);
  const [pageSize, setPageSize] = useState(true);

  useEffect(() => {
    if (pageSize) {
      getSignals(userToken, 10).then((response) => setSignals(response));
    } else if (pageSize) {
      getSignals(userToken, 25).then((response) => setSignals((response)));
    }
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
        {/* <GridItem rowSpan={2} colSpan={7}>
          <PaginationCrumbs
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </GridItem> */}
        <PageSizeSelect userToken={userToken} pageSize={pageSize} setPageSize={setPageSize} signals={signals} setSignals={setSignals} />
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
