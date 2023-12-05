import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fs, hp, wp} from '../helper/Globel';
import {Images} from '../helper/Image';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {updateTextInputValue} from '../redux/Action';
import moment from 'moment';

const Model = ({visible, onrequestClose, onPress}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const textinputValue = useSelector(state => state.textinputValue);
  const [videoTitle, setVideoTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [date, setdate] = useState('');

  const dispatch = useDispatch();

  const openImagePicker = () => {
    const options = {
      mediaType: 'mixed',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Text style={styles.modalText}>Create Post</Text>
            <TouchableOpacity onPress={() => onrequestClose(false)}>
              <Image source={Images.cancel} style={styles.cancelimage} />
            </TouchableOpacity>
            <View style={styles.palceholderview}>
              <TextInput
                placeholder="What`s going on today?"
                placeholderTextColor={'rgb(59,78,80)'}
                style={styles.palceholder}
                onChangeText={txt => {
                  setDiscription(txt);
                }}
              />
            </View>
            <View style={styles.addpostview}>
              <Text style={styles.addposttext}>Add to your post</Text>
            </View>

            <View style={styles.container3}>
              <TouchableOpacity
                style={styles.toucstyle}
                onPress={openImagePicker}>
                {selectedImage && <Image source={{uri: selectedImage}} />}
                <Image source={Images.picture} style={styles.gallery} />
                <Text style={styles.buttonimage}>Add Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.toucstyle}
                onPress={openImagePicker}>
                {selectedImage && <Image source={{uri: selectedImage}} />}
                <Image source={Images.video} style={styles.gallery} />
                <Text style={styles.buttonvideo}>Add Video</Text>
              </TouchableOpacity>
              <Text>{date}</Text>
            </View>
            <View style={styles.tittleview}>
              <TextInput
                placeholder="Tittle of Image/Video (Optional)"
                placeholderTextColor={'rgb(59,78,80)'}
                style={styles.tittleholder}
                value={textinputValue}
                onChangeText={txt => {
                  setVideoTitle(txt);
                }}
              />
            </View>
            <View style={styles.postview}>
              <TouchableOpacity
                style={styles.posttouch}
                disabled={
                  discription || videoTitle || selectedImage ? false : true
                }
                onPress={() => {
                  dispatch(
                    updateTextInputValue([
                      {
                        id: Date.now(),
                        title: videoTitle,
                        disc: discription,
                        like: 0,
                        imgUri: selectedImage,
                        date: moment().utcOffset('+05:30').format(' h:mm a'),
                      },
                    ]),
                  );
                  setSelectedImage(null);
                  setVideoTitle('');
                  setDiscription('');
                  onrequestClose(false);
                }}>
                <Text style={styles.postbutton}>POST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  view2: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 15,
    marginHorizontal: wp(10),
    shadowColor: '#000',
    marginTop: hp(170),
    marginBottom: hp(100),
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
    paddingVertical: hp(10),
    marginBottom: hp(140),

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
    paddingVertical: hp(10),
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
  toucstyle: {
    backgroundColor: 'rgb(29,33,19)',
    width: wp(185),
    height: hp(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: wp(10),
    borderRadius: 10,
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
    backgroundColor: 'rgb(161,255,67)',
    alignItems: 'center',
    padding: hp(15),
    borderRadius: 15,
    elevation: 5,
  },
  tittleview: {
    backgroundColorL: 'yelow',
    marginTop: hp(30),
    marginHorizontal: wp(10),
    marginLeft: wp(10),
  },
  postview: {
    marginHorizontal: wp(15),
    marginTop: hp(80),
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
});
export default Model;
