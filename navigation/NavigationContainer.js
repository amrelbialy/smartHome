import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import SmartHome from './SmartHome';

const NavigationContainer = (props) => {
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
    }
  }, [isAuth]);

  return <SmartHome ref={navRef} />;
};

export default NavigationContainer;
