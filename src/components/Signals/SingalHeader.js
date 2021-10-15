import { Grid, GridItem, Text } from '@chakra-ui/layout';
import React from 'react';

const SingalHeader = () => (
  <GridItem colSpan={7}>
      <Grid templateColumns='repeat(7, 1fr)'>
        <GridItem fontSize='sm' colSpan={1}>
          <Text fontWeight='bold'>EventCode</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text fontWeight='bold'>Signal Code</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text fontWeight='bold'>Point</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text fontWeight='bold'>Xmit</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text fontWeight='bold'>Date</Text>
        </GridItem>
        <GridItem fontSize='sm' rowSpan={2} colSpan={1}>
          <Text fontWeight='bold'>Time</Text>
        </GridItem>
        <GridItem colSpan={1} fontSize='sm'>
          <Text fontWeight='bold'>Alarm #</Text>
        </GridItem>
      </Grid>
    </GridItem>
);

export default SingalHeader;
