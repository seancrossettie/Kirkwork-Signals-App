import React, { useState } from 'react';
import Routes from '../../helpers/Routes';
import LoginPage from '../../pages/LoginPage';

function App() {
  const [userToken, setUserToken] = useState(null);

  return (
    <>
      { userToken !== null
        ? <Routes userToken={userToken} setUserToken={setUserToken} />
        : <LoginPage userToken={userToken} setUserToken={setUserToken} />
      }
    </>
  );
}

export default App;
