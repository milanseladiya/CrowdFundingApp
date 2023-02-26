import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/reducers/store';
import RootNavigator from './src/navigation/rootNavigator';
import {colors} from './src/helper/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={colors.statusBgColor}
        barStyle={'dark-content'}
        translucent={true}
      />
      <RootNavigator />
    </Provider>
  );
};

export default App;
