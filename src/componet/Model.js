import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {Images} from '../helper/Image';

const Model = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.view2}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create Post</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={Images.cancel} style={styles.cancelimage} />
            </TouchableOpacity>
            <TextInput
              placeholder="What`s going on today?"
              placeholderTextColor={'rgb(62,71,72)'}
              style={styles.palceholder}
            />
            <Text style={styles.addposttext}>Add to your post</Text>
            <View style={styles.butttonview}>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Image source={Images.picture} style={styles.pictureimage} />
                <Text style={styles.textStyle}>Add Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Image source={Images.video} style={styles.pictureimage} />
                <Text style={styles.textStyle}>Add Video</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Tittle of Image/Video (Optional)"
              placeholderTextColor={'rgb(62,71,72)'}
              style={styles.tittleholder}
            />
            <TouchableOpacity style={styles.posttouch}>
              <Text style={styles.postbutton}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.butttonview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Image source={Images.picture} style={styles.pictureimage} />
          <Text style={styles.textStyle}>Add Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Image source={Images.video} style={styles.pictureimage} />
          <Text style={styles.textStyle}>Add Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'rgb(24,28,28)',
    width: '100%',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
  },
  cancelimage: {
    height: hp(20),
    width: hp(20),
    tintColor: 'white',
    alignSelf: 'flex-end',
  },
  palceholder: {
    borderWidth: 2,
    height: hp(200),
    width: '100%',
    fontSize: 20,
    borderColor: 'rgb(38,48,47)',
  },
  addposttext: {
    fontSize: 20,
    marginTop: hp(20),
    color: 'white',
    fontWeight: '600',
  },
  tittleholder: {
    borderWidth: 2,
    padding: hp(10),
    borderRadius: 15,
    marginTop: hp(20),
    fontSize: 20,
    fontWeight: '500',
    borderColor: 'rgb(38,48,47)',
  },
  butttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: hp(20),
    gap: wp(10),
  },
  button: {
    borderRadius: 10,
    padding: hp(15),
    width: wp(200),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonOpen: {
    backgroundColor: 'rgb(24,33,19)',
  },
  posttouch: {
    backgroundColor: 'chartreuse',
    alignItems: 'center',
    padding: hp(15),
    marginTop: hp(30),

    borderRadius: 15,
  },
  postbutton: {
    fontSize: 18,
    fontWeight: '400',
  },

  textStyle: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
  pictureimage: {
    height: hp(20),
    width: hp(20),
    tintColor: 'white',
  },
});
export default Model;
