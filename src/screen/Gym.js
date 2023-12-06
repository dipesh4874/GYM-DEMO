import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {Images} from '../helper/Image';
import Model from './Model';
import {useDispatch, useSelector} from 'react-redux';
import {deleteData, updateLike} from '../redux/Action';
import Videoplayer from 'react-native-video-player';

const Gym = () => {
  const [index1, setIndex1] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [click, setclick] = useState(true);
  const data = [{name: 'All post'}, {name: 'Photos'}, {name: 'Videos'}];
  const textinput = useSelector(state => state?.user?.textinput);
  console.log(textinput);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Gymtext}>Arnab's Gym Feed</Text>
      <View style={styles.container2}>
        <Image source={Images.user} style={styles.user} />
        <TextInput
          placeholder="Whats going on today?"
          placeholderTextColor={'rgb(59,78,80)'}
          style={styles.textinput}
        />
      </View>

      <View style={styles.container3}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => setModalVisible(true)}>
          <Image source={Images.picture} style={styles.gallery} />
          <Text style={styles.buttonimage}>Add Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => setModalVisible(true)}>
          <Image source={Images.video} style={styles.gallery} />
          <Text style={styles.buttonvideo}>Add Video</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container4}>
        <Text style={styles.youpost}>Your Posts</Text>
      </View>
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
                  {backgroundColor: index === index1 ? 'rgb(0,204,152)' : null},
                  {paddingHorizontal: index === index1 ? wp(25) : wp(25)},
                ]}
                onPress={() => setIndex1(index)}>
                <Text
                  style={{
                    color: index === index1 ? 'black' : 'white',
                  }}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.FlatListdata}>
        <FlatList
          data={textinput}
          bounces={false}
          renderItem={({item, index}) => (
            <View style={styles.renderview}>
              <Text style={styles.tittle}>{item?.title}</Text>
              {item?.mediaType == 'video' ? (
                <Videoplayer
                  video={{uri: item?.videos}}
                  resizeMode={'cover'}
                  repeat={true}
                  endWithThumbnail
                />
              ) : (
                <Image
                  source={{uri: item?.imgUri}}
                  style={
                    item?.imgUri == null
                      ? {height: 0, width: 0}
                      : styles.flatimg
                  }
                />
              )}

              <Image source={{uri: item?.videos}} />
              <Text style={styles.discreptic}>{item?.disc}</Text>
              <Text style={styles.date}>{`Posted on ${item.date}`}</Text>
              <View style={styles.toucview}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      updateLike({id: item?.id, like: (item.like += 1)}),
                    );
                  }}>
                  <Image source={Images.heart} style={styles.miximage} />
                </TouchableOpacity>
                <Text style={styles.counttext}>{textinput[index]?.like}</Text>

                <TouchableOpacity>
                  <Image source={Images.chat} style={styles.miximage} />
                </TouchableOpacity>
                <View style={styles.deleteview}>
                  <TouchableOpacity
                    style={styles.deletetouch}
                    onPress={() => {
                      dispatch(deleteData(item?.id));
                    }}>
                    <Text style={styles.dotbutton}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <Model visible={modalVisible} onrequestClose={setModalVisible} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(1,25,27)',
  },
  container2: {
    marginTop: hp(30),
    flexDirection: 'row',
    paddingHorizontal: wp(10),
    gap: wp(15),
  },
  Gymtext: {
    color: 'white',
    fontSize: fs(25),
    fontWeight: '700',
    marginTop: hp(50),
    marginLeft: wp(20),
  },
  textinput: {
    fontSize: fs(15),
    fontWeight: '500',
    borderWidth: 1,
    borderColor: 'rgb(31,49,48)',
    width: '85%',
    padding: hp(15),
    color: 'rgb(59,78,80)',
  },
  user: {
    width: wp(50),
    height: wp(50),
  },
  container3: {
    flexDirection: 'row',
    marginTop: hp(15),

    alignItems: 'center',
    gap: wp(5),
  },
  gallery: {
    width: wp(20),
    height: wp(20),
    tintColor: 'white',
  },
  buttonimage: {
    color: 'white',
    fontSize: fs(17),
    fontWeight: '500',
  },
  buttonvideo: {
    color: 'white',
    fontSize: fs(17),
    fontWeight: '500',
  },
  container4: {
    marginTop: hp(45),
    marginLeft: wp(20),
  },
  youpost: {
    fontSize: fs(23),
    fontWeight: '700',
    color: 'white',
  },
  container5: {
    flexDirection: 'row',
    marginTop: hp(20),
    paddingHorizontal: wp(5),
    gap: wp(10),
    paddingLeft: wp(30),
  },
  allposttext: {
    fontSize: fs(17),
    color: 'black',
    fontWeight: '500',
  },
  all: {
    backgroundColor: 'rgb(0,204,152)',
    paddingHorizontal: hp(30),
    paddingVertical: hp(10),
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 20,
  },
  viewstyle: {
    marginTop: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Touchstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(25),
    paddingVertical: hp(10),
    borderRadius: 20,
  },
  FlatListdata: {
    flex: 1,
  },
  renderview: {
    marginTop: hp(20),
  },
  flatimg: {
    height: hp(200),
    width: wp(400),
    borderRadius: 15,
    marginHorizontal: wp(10),
    marginTop: hp(10),
  },
  discreptic: {
    fontSize: fs(18),
    color: 'white',
    fontWeight: '500',
    marginTop: hp(15),
    marginLeft: wp(10),
  },
  tittle: {
    marginLeft: wp(10),
    fontSize: fs(23),
    color: 'white',
    fontWeight: '600',
  },
  toucview: {
    flexDirection: 'row',
    marginTop: hp(50),
    marginHorizontal: wp(30),
    gap: wp(15),
  },
  miximage: {
    height: hp(25),
    width: hp(25),
    tintColor: 'white',
  },
  deleteview: {
    flexDirection: 'row',
    marginLeft: wp(180),
  },
  deletetouch: {
    borderRadius: 10,
    backgroundColor: 'rgb(59,78,80)',
    paddingHorizontal: wp(20),
    paddingVertical: hp(5),
  },
  dotbutton: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  counttext: {
    color: 'white',
    fontSize: fs(18),
  },

  view2: {
    flex: 1,
    backgroundColor: 'rgb(24,28,28)',
    borderRadius: 15,
    marginHorizontal: wp(20),
    shadowColor: '#000',
    marginTop: hp(170),
    marginBottom: hp(50),
  },

  cancelimage: {
    height: hp(20),
    width: hp(20),
    tintColor: 'white',
    alignSelf: 'flex-end',
    bottom: hp(10),
    right: wp(10),
    position: 'absolute',
  },
  palceholderview: {
    borderWidth: 1,
    borderColor: 'rgb(38,48,47)',
    marginTop: hp(30),
    marginHorizontal: wp(13),
    borderWidth: 1.5,
  },
  palceholder: {
    paddingVertical: hp(90),
    marginLeft: wp(20),
    fontSize: fs(20),
    borderColor: 'rgb(38,48,47)',
    color: 'white',
  },
  addpostview: {
    marginTop: hp(25),
    marginLeft: wp(15),
  },
  addposttext: {
    fontSize: fs(25),
    color: 'white',
    fontWeight: '600',
  },
  buttonimage: {
    color: 'white',
    fontSize: fs(17),
    fontWeight: '500',
  },
  tittleholder: {
    borderWidth: 2,
    paddingVertical: hp(8),
    borderRadius: 10,
    fontSize: fs(15),
    fontWeight: '500',
    borderColor: 'rgb(38,48,47)',
    color: 'white',
  },
  butttonview: {
    flexDirection: 'row',
    marginTop: hp(15),
    alignItems: 'center',
    gap: wp(5),
  },
  container3: {
    flexDirection: 'row',
    marginTop: hp(15),
    alignItems: 'center',
    marginHorizontal: wp(10),
    gap: wp(5),
  },
  button2: {
    paddingVertical: hp(15),
    paddingHorizontal: wp(43),
    gap: wp(10),
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'rgb(29,33,19)',
  },
  gallery: {
    width: wp(20),
    height: wp(20),
    tintColor: 'white',
  },
  buttonvideo: {
    color: 'white',
    fontSize: fs(17),
    fontWeight: '500',
  },
  posttouch: {
    backgroundColor: 'chartreuse',
    alignItems: 'center',
    padding: hp(15),
    borderRadius: 15,
  },
  tittleview: {
    backgroundColorL: 'orange',
    marginTop: hp(30),
    marginHorizontal: wp(10),
    marginLeft: wp(10),
  },
  postview: {
    marginHorizontal: wp(15),
    marginTop: hp(60),
  },
  postbutton: {
    fontSize: fs(18),
    fontWeight: '400',
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '700',
    marginTop: hp(20),
    fontSize: fs(20),
    color: 'white',
  },
  pictureimage: {
    height: hp(20),
    width: hp(20),
    tintColor: 'white',
  },
  date: {
    color: 'white',
    fontSize: fs(20),
    marginTop: hp(20),
    fontStyle: 'italic',
    marginLeft: wp(10),
    fontWeight: '400',
  },
});

export default Gym;
