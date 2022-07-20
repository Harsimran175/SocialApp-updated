import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,Picker,KeyboardAvoidingView,Platform
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config'
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

export default class DonationBox extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      address: "",
      donation: "",
    };
  }
 donate = () => {
    db.collection("donate").add({
      name: this.state.name,
      email: this.state.email ,
      contact: this.state.contact,
      address: this.state.address,
      donation: this.state.donation,
       });
    alert("Donation Done Successfully!");
    
  };
  render() {
    return (
      <View style={{ flex: 1,height:"100%"}}>
        <ScrollView>
       
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,alignItems:"center",backgroundColor:"#e8c488",height:"125%"}}> 
        <Text style={{color:"#6d3c09",marginTop:"5%",marginLeft:"5%",fontWeight:"bold"}}>"The Value of life is not in its duration,but in its donation .You are not important because of how long you live,you are important because of how effective you live." </Text>
         
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
              <MaterialIcons name="person" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Your Name"
              onChangeText={(val) => {
                this.setState({ name: val });
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
             <Fontisto name="phone" size={20} color="white" /> 
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Contact"
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
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
             <Fontisto name="home" size={20} color="white" /> 
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Address"
               multiline = {true}
              onChangeText={(val) => {
                this.setState({ address: val });
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
             <Fontisto name="dollar" size={20} color="white" /> 
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
              }}
              placeholder="Enter Donation"
              onChangeText={(val) => {
                this.setState({ donation: val });
              }}
            />
          </View>
        

          <TouchableOpacity
            style={{
              backgroundColor: "#6d3c09",
              width: "50%",
              height: 40,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"10%"
            }}
          onPress={() => {
              if (
                this.state.name &&
                this.state.email &&
                this.state.contact &&
                this.state.address &&
                this.state.donation 
               
                ) {
                this.donate();
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Donate</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
