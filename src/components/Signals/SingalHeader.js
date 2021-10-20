// import { Grid, GridItem, Text } from '@chakra-ui/layout';
import { Th, Thead, Tr } from '@chakra-ui/table';
import React from 'react';

const SingalHeader = () => (
  <Thead>
    <Tr>
      <Th>
        Event Code
      </Th>
      <Th>
        Signal Code
      </Th>
      <Th>
        Description
      </Th>
      <Th>
        Xmit
      </Th>
      <Th>
        Date
      </Th>
      <Th>
        Time
      </Th>
    </Tr>
  </Thead>
);

export default SingalHeader;
