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
import { Feather } from '@expo/vector-icons';

export default class Enroll extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      picode: "",
      education: "",
      profile: "",
    };
  }
  addData = () => {
    db.collection("request").add({
      userEmail: firebase.auth().currentUser.email,
      name: this.state.name,
      email:this.state.email,
      contact: this.state.contact,
      pincode: this.state.pincode,
      education: this.state.education,
      profile: this.state.profile,
    });
    alert("Form submitted Successfully!");
  };
  render() {
    return (
      <View style={{ flex: 1,height:"100%"}}>
        <ScrollView>
        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,height:"110%",alignItems:"center",backgroundColor:"#e8c488"}}> 
        <Text style={{color:"#6d3c09",marginTop:"5%",marginLeft:"5%"}}>Enroll and be a part of our Organisation and get chance to help the people.We also provide internships with our NGO.</Text>
         
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
              placeholderTextColor="white"
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
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <MaterialIcons name="home" size={20} color="white" />
            <TextInput
            style={{
              width: "90%",
              height: 40,
              alignSelf: "center",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              paddingLeft: 10,
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            placeholder="PinCode"
            placeholderTextColor="white"
            onChangeText={(val) => {
              this.setState({ pincode: val });
            }}
          />
          </View>       
         
<View style={{flexDirection:"row",width: "85%",
              alignSelf: "center",
              marginTop: 30,
              alignItems: "center",}}>
      <MaterialIcons name="category" size={20} color="white" />    
 <View
            style={{
               backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
 
            <Picker
              mode="dropdown"
              selectedValue={this.state.education}
              style={{
                color: "white",
                paddingLeft: 10,
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  education: itemValue,
                })
              }
            >
              <Picker.Item label="Select Educational Qualification " value="" />
              <Picker.Item label="10th" value="10th" />
              <Picker.Item label="12th" value="12th" />
              <Picker.Item label="Graduation" value="Graduation" />
              <Picker.Item label="Post Graduation" value="Post Graduation" />
            </Picker>
          </View>
</View>
<View style={{flexDirection:"row",width: "85%",
              alignSelf: "center",
              marginTop: 30,
              alignItems: "center",}}>
      <MaterialIcons name="category" size={20} color="white" />    
 <View
            style={{
             backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
 
            <Picker
              mode="dropdown"
              selectedValue={this.state.profile}
              style={{
                color: "white",
             
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  profile: itemValue,
                })
              }
            >
              <Picker.Item label="You want to " value="" />
              <Picker.Item label="Volunteer" value="Voluteer" />
              <Picker.Item label="Intern" value="Intern" />
              <Picker.Item label="Helper" value="Helper>" />
            </Picker>
          </View>
</View>

          <TouchableOpacity
            style={{
              backgroundColor: "#6d3c09",
              width: "50%",
              height: 40,
              marginTop: "10%",
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
     
            }}
            onPress={() => {
              if (
                this.state.name &&
                this.state.email &&
                this.state.contact &&
                this.state.pincode &&
                this.state.education &&
                this.state.profile 
                ) {
                this.addData();
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Submit +</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
