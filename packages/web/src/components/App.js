import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { init } from '../actions';

import Main from './Main';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  return <Main />;
};

export default React.memo(App);
