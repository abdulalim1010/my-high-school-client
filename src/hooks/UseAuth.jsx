import React, { useContext } from 'react';
import { AuthContext } from '../authentification/context/AuthContext';

const UseAuth = () => {
  const authInfo = useContext(AuthContext)
  return authInfo
};

export default UseAuth;