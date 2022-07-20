import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,Alert,
  ImageBackground,
  ScrollView,
  TextInput,ActivityIndicator,
  TouchableOpacity,Picker,KeyboardAvoidingView,Platform
} from "react-native";
import { Fontisto,FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config'
import { Feather } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Header, Icon, Avatar } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
export default class SeekHelp extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      title: "",
      email: "",
      contact: "",
      description: "",
      money: "",
       image:
        '#',
    };
  }

 takePhotoFromCamera = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      cameraPermissions: status === 'granted',
    });
    if (this.state.cameraPermissions) {
      await ImagePicker.launchCameraAsync({
        compressImageMaxWidth: 290,
        compressImageMaxHeight: 290,
        cropping: true,
        compressImageQuality: 0.9,
      }).then((image) => {
        this.setState({ image: image.uri });
        console.log('Worked' + this.state.image);
        this.setState({
          modalVisible: false,
        });
      });
    } else {
      return alert('Permissions Not Granted').then(() => {
        this.setState({
          modalVisible: false,
        });
      });
    }
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    this.setState({
      modalVisible: false,
    });
    if (!cancelled) {
      this.setState({ image: uri });
      console.log('Worked' + this.state.image);
      this.setState({
        modalVisible: false,
      });
    }
  };

  fetchImage = (email) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child('studentProfiles/' + email);
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
        db.collection('allStudents').doc(this.state.docID).update({
          studentEmail: firebase.auth().currentUser.email,
          studentContact: this.state.contact,
          image: this.state.image,
        });
        Alert.alert('Profile Updated');
        alert('Profile updated');
      })
      .catch((error) => {
        console.log('error' + error);
        Alert.alert('Something went wrong in media uplaod, try again');
        this.setState({
          image:
            'https://pixselo.com/testimonial/neo-systek/dummy-placeholder-image-400x400/',
        });
      });
  };
  

  help = () => {
    db.collection("help").add({
      title: this.state.title,
      contact: this.state.contact,
      description: this.state.description,
      money: this.state.money,
     
      email: this.state.email,
       image: this.state.image,
       
        });
    alert("Request sent Successfully!");
    
  };
  render() {
     var icon;
    if(this.state.uploading === 'none'){
      icon = <Entypo name="upload" size={24} color="black" />
    }
    else if(this.state.uploading){
      icon = <ActivityIndicator size={'small'} color="black" />
    }
    else{ 
      icon = <Feather name="check-circle" size={24} color="black" /> 
    }
    return (
      <View style={{ flex: 2,height:"100%"}}>
        <ScrollView>
       
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,height:"104%",alignItems:"center",backgroundColor:"#e8c488"}}> 
       
           <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="title" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Title"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ title: val });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <Fontisto name="email" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Email-Id"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

         
<View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="phone" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Contact No"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ contact: val });
              }}
            />
          </View>
         
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="description" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Description"
              multiline = {true}
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ description: val });
              }}
            />
          

</View>
 <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="money" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Estimate Money Required"
              placeholderTextColor="white"
              onChangeText={(val) => {
                this.setState({ money: val });
              }}
            />
          </View>

    
            <View style={{ backgroundColor: '#ffff',width:"80%",
    borderRadius: 10,marginTop:"10%"
   
  }}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: -13,
                    right: -10,
                    margin: 10,
                    padding: 10,
                  }}
                  onPress={() => this.setState({ modalVisible: false })}>
                  <MaterialIcons
                    name="cancel"
                    size={24}
                    color="#2460a7ff"
                    onPress={() => this.setState({ modalVisible: false })}
                  />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', margin: 5, padding: 5 }}>
                  Choose An Option
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.takePhotoFromCamera();
                    }}
                    style={{
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <Feather
                      name="camera"
                      size={24}
                      color="#2460a7ff"
                      onPress={() => this.setState({ modalVisible: false })}
                    />
                    <Text style={{ textAlign: 'center' }}>Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.selectPicture();
                    }}
                    style={{
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    <FontAwesome
                      name="photo"
                      size={24}
                      color="#2460a7ff"
                      onPress={() => this.setState({ modalVisible: false })}
                    />
                    <Text style={{ textAlign: 'center' }}>Photos</Text>
                  </TouchableOpacity>
                </View>
              </View>
          
          
          <ScrollView
            style={{
              width: '60%',
              backgroundColor: '#e8c488',
            }}>
            <KeyboardAvoidingView>
              <Avatar
                rounded
                source={{
                  uri: this.state.image,
                }}
                onPress={() => {
                  this.setState({ modalVisible: true });
                }}
                size="large"
                containerStyle={{ marginTop: 20,
    alignSelf: 'center',}}
              />
              </KeyboardAvoidingView>
              </ScrollView>



          <TouchableOpacity
            style={{
              backgroundColor: "#6d3c09",
              width: "50%",
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
     marginBottom:"20%"
            }}
            onPress={() => {
              if (
                this.state.title &&
                this.state.email &&
                this.state.contact &&
                this.state.description &&
                this.state.money &&
                this.state.image 
                ) {
                this.help();
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Request +</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
