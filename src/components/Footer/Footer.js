import { IconButton } from '@chakra-ui/button';
import {
  ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon
} from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';
import {
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { getSignals } from '../../helpers/data/data';

const Footer = ({
  userToken, pageSize, setPageSize, setSignals, pageNumber, setPageNumber, max, setMax
}) => {
  const handlePageChange = (p) => {
    switch (p) {
      case 'first':
        getSignals(userToken, 1, pageSize).then((response) => setSignals(response.items));
        setPageNumber(1);
        break;
      case 'previous':
        if (pageNumber > 1) {
          getSignals(userToken, pageNumber - 1, pageSize).then((response) => setSignals(response.items));
          setPageNumber(pageNumber - 1);
        }
        break;
      case 'next':
        if (pageSize < max) {
          getSignals(userToken, pageNumber + 1, pageSize).then((response) => setSignals(response.items));
          setPageNumber(pageNumber + 1);
        }
        break;
      case 'last':
        getSignals(userToken, max, pageSize).then((response) => setSignals(response.items));
        setPageNumber(max);
        break;
      default:
        break;
    }
  };

  const handleSelect = (e) => {
    const size = e.target.value;
    setPageSize(Number(size));
    getSignals(userToken, pageNumber, size).then((response) => {
      setSignals(response.items);
      setMax(response.numPages);
    });
  };

  return (
    <Flex justifyContent='space-between' alignItems='center' mt={4} p='5'>
      <Flex>
        <Tooltip label='First Page'>
          <IconButton
            mr={4}
            onClick={() => handlePageChange('first')}
            icon={<ArrowLeftIcon h={3} w={3} />}
          />
        </Tooltip>
        <Tooltip label='Previous Page'>
          <IconButton
            onClick={() => handlePageChange('previous')}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>
      <Flex alignItems='center'>
        <Text flexShrink='0' mr={8}>Page{' '}
          <Text fontWeight='bold' as='span'>{pageNumber}{' '}</Text>
            of{' '}
          <Text fontWeight='bold' as='span'>{max}{' '} </Text>
        </Text>
        <Text flexShrink='0'>Go to page:</Text>{' '}
        <NumberInput
          flexShrink='0'
          ml={2}
          mr={8}
          defaultValue={pageNumber + 1}
          w={28}
          min={1}
          max={max}
          onChange={(value) => {
            if (value > 1 && value < max) {
              getSignals(userToken, value, pageSize).then((response) => setSignals(response.items));
              setPageNumber(Number(value));
            } else {
              getSignals(userToken, pageNumber, pageSize).then((response) => setSignals(response.items));
            }
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          flexShrink='0'
          onChange={(e) => handleSelect(e)}
        >
          <option value={10}>Display 10</option>
          <option value={25}>Display 25</option>
        </Select>
      </Flex>
      <Flex>
        <Tooltip label='Next Page'>
          <IconButton
            onClick={() => handlePageChange('next')}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label='Last Page'>
          <IconButton
            ml={4}
            onClick={() => handlePageChange('last')}
            icon={<ArrowRightIcon h={3} w={3} />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

Footer.propTypes = {
  userToken: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
  signals: PropTypes.array,
  setSignals: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  setMax: PropTypes.func.isRequired
};

export default Footer;
