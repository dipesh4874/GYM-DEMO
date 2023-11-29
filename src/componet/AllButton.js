import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../helper/Globel';

const AllButton = () => {
  const [index1, setIndex1] = useState(0);
  const data = [{name: 'All Post'}, {name: 'Photos'}, {name: 'Videos'}];
  return (
    <View style={styles.viewstyle}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.Touchstyle,
                {
                  backgroundColor: index === index1 ? 'mediumaquamarine' : null,
                },
                {paddingHorizontal: index === index1 ? wp(32) : wp(15)},
              ]}
              onPress={() => setIndex1(index)}>
              <Text style={{color: index === index1 ? 'black' : 'white'}}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewstyle: {
    marginTop: hp(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchstyle: {
    width: wp(120),
    height: wp(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(8),

    paddingVertical: hp(10),
    borderRadius: 14,
  },
});
export default AllButton;
