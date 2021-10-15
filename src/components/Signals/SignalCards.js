import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  GridItem, Grid, Text
} from '@chakra-ui/layout';

const SignalCards = ({
  alarmNum, eventCodeDesc, pointDesc, signalCode, xmit, siteDate
}) => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    setDate(siteDate.split('T'));
  }, []);

  return (
      <Grid templateColumns='repeat(7, 1fr)'>
        <GridItem fontSize='sm' colSpan={1}>
          <Text>{eventCodeDesc}</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text>{signalCode}</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text>{pointDesc}</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text>{xmit}</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text>{date[0]}</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text>{date[1]}</Text>
        </GridItem>
        <GridItem colSpan={1} fontSize='sm'>
          <Text fontWeight='bold'>{alarmNum}</Text>
        </GridItem>
      </Grid>
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
