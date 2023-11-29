import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {hp, wp} from './src/helper/Globel';
import {Images} from './src/helper/Image';
import AllButton from './src/componet/AllButton';
import Model from './src/componet/Model';

const App = () => {
  return (
    <View style={styles.conainers}>
      <Text style={styles.Headertext}>Arnab's Gym Feed</Text>
      <View style={styles.conainers2}>
        <Image
          source={Images.user}
          resizeMode="stretch"
          style={styles.userimage}
        />
        <TextInput
          placeholder="What`s going on today?"
          placeholderTextColor={'rgb(46,66,67)'}
          style={styles.textinput}
        />
      </View>

      <Model />
      <View style={styles.yourpostview}>
        <Text style={styles.posttext}>Your Posts</Text>
      </View>
      <AllButton />
    </View>
  );
};
const styles = StyleSheet.create({
  conainers: {
    flex: 1,
    backgroundColor: 'rgb(3,8,8)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  conainers2: {
    marginTop: hp(50),
    marginLeft: wp(20),
    flexDirection: 'row',
  },
  Headertext: {
    fontSize: 27,
    fontWeight: '600',
    marginLeft: wp(20),
    marginTop: hp(70),
    color: 'white',
  },
  userimage: {
    height: hp(50),
    width: hp(50),
  },
  textinput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 20,
    marginHorizontal: wp(20),
    paddingLeft: wp(10),
    // fontWeight: '700',
  },
  posttext: {
    fontSize: 25,
    color: 'white',
    fontWeight: '700',
  },
  yourpostview: {
    marginTop: hp(30),
    marginLeft: wp(20),
  },
});
export default App;
