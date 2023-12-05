import {StyleSheet, View} from 'react-native';

import Gym from './src/screen/Gym';
import Model from './src/screen/Model';
import {Provider} from 'react-redux';
import store, {persiststore} from './src/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore}>
        <View style={styles.container}>
          <Gym />
        </View>
      </PersistGate>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
