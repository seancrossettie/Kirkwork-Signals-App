import React from 'react';
import PropTypes from 'prop-types';

const SignalCards = ({
  alarmNum, eventCodeDesc, pointDesc, signalCode, xmit, siteDate
}) => (
    <div>
      <h1>
        {alarmNum}
        {eventCodeDesc}
        {pointDesc}
        {signalCode}
        {xmit}
        {siteDate}
      </h1>
    </div>
);

SignalCards.propTypes = {
  alarmNum: PropTypes.any,
  eventCodeDesc: PropTypes.string,
  pointDesc: PropTypes.string,
  signalCode: PropTypes.string,
  xmit: PropTypes.string,
  siteDate: PropTypes.string
};

export default SignalCards;
