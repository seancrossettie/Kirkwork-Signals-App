import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from '@chakra-ui/react';
import { getSignals } from '../helpers/data/data';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Footer/Footer';
import SingalHeader from '../components/Signals/SingalHeader';
import SignalCards from '../components/Signals/SignalCards';

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
      <Table>
        <SingalHeader />
        {
          signals.map((signal, i) => (
            <SignalCards
              key={i}
              alarmNum={signal.alarmNum}
              eventCodeDesc={signal.eventCodeDesc}
              pointDesc={signal.pointDesc}
              signalCode={signal.signalCode}
              xmit={signal.xmit}
              siteDate={signal.siteDate}
            />
          ))
        }
      </Table>
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
