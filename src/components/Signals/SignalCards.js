import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Td, Tr } from '@chakra-ui/table';

const SignalCards = ({
  alarmNum, eventCodeDesc, pointDesc, signalCode, xmit, siteDate
}) => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    setDate(siteDate.split('T'));
  }, []);

  return (
    <Tr>
      <Td>{eventCodeDesc}</Td>
      <Td>{signalCode}</Td>
      <Td>{pointDesc}</Td>
      <Td>{xmit}</Td>
      <Td>{date[0]}</Td>
      <Td>{date[1]}</Td>
      <Td>{alarmNum}</Td>
    </Tr>
  );
};

SignalCards.propTypes = {
  alarmNum: PropTypes.any,
  eventCodeDesc: PropTypes.string,
  pointDesc: PropTypes.string,
  signalCode: PropTypes.string,
  xmit: PropTypes.string,
  siteDate: PropTypes.string
};

export default SignalCards;
