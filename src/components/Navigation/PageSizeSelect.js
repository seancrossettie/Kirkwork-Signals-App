import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/react';
import { getSignals } from '../../helpers/data/data';

const PageSizeSelect = ({
  userToken, pageSize, setPageSize, setSignals
}) => {
  const handleSelect = () => {
    if (pageSize) {
      setPageSize(false);
      getSignals(userToken, 25).then((response) => setSignals(response));
    } else {
      setPageSize(true);
      getSignals(userToken, 10).then((response) => setSignals(response));
    }
  };

  return (
  <Select onChange={() => handleSelect()}>
    <option value='true'>10 per page</option>
    <option value='false'>25 per page</option>
  </Select>
  );
};

PageSizeSelect.propTypes = {
  userToken: PropTypes.string.isRequired,
  pageSize: PropTypes.bool.isRequired,
  setPageSize: PropTypes.func.isRequired,
  signals: PropTypes.array,
  setSignals: PropTypes.func.isRequired
};

export default PageSizeSelect;
