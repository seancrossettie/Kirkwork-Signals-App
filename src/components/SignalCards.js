import React from 'react';
import PropTypes from 'prop-types';

const SignalCards = ({ id }) => (
    <div>
      <h1>
        {id}
      </h1>
    </div>
);

SignalCards.propTypes = {
  id: PropTypes.string
};

export default SignalCards;
