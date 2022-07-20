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
import { FontAwesome5 } from '@expo/vector-icons';
export default class Contribute extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      availability: "",
      cause: "",
      days:"",
      times:""
    };
  }
 contribution = () => {
    db.collection("contribution").add({
      name: this.state.name,
      email: this.state.email ,
      contact: this.state.contact,
      availability: this.state.availability,
      cause: this.state.cause,
      days: this.state.days,
      times:this.state.times
       });
    alert("Form Submitted Successfully!");
    
  };
  render() {
    return (
      <View style={{ flex: 1,height:"100%"}}>
        <ScrollView>
       
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{width:"100%",borderTopLeftRadius:30,borderTopRightRadius:30,height:"104%",alignItems:"center",backgroundColor:"#e8c488"}}> 
       
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
              placeholder="Availability"
               multiline = {true}
              onChangeText={(val) => {
                this.setState({ availability: val });
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
             <FontAwesome5 name="hands-helping" size={20} color="white" /> 
           <TextInput
            style={{
              width: "90%",
              height: 40,
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
             borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
       
            }}
            placeholder="Enter Cause"
            placeholderTextColor="gray"
            onChangeText={(val) => {
              this.setState({ cause: val });
            }}
          />

          </View>
         <View style={{flexDirection:"row",width: "85%",
              alignSelf: "center",
              marginTop: 40,
              alignItems: "center",}}>
      <MaterialIcons name="category" size={20} color="white" />    
 <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",
              width: "85%",
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
              
              selectedValue={this.state.days}
              style={{
                color: "white",
             
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  days: itemValue,
                })
              }
            >
              <Picker.Item label="Select Preffered Days " value="" />
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
</View>
<View style={{flexDirection:"row",width: "85%",
              alignSelf: "center",
              marginTop: 20,
              alignItems: "center",}}>
      <MaterialIcons name="category" size={20} color="white" />    
 <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",
              width: "85%",
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
              selectedValue={this.state.times}
              style={{
                color: "white",
             
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  times: itemValue,
                })
              }
            >
              <Picker.Item label="Select Preffered Timings " value="" />
              <Picker.Item label="9:00am -12:00pm" value="9:00am -12:00pm" />
              <Picker.Item label="12:00pm to 3:00pm" value="12:00pm to 3:00pm" />
              <Picker.Item label="3:00pm to 6:00pm" value="3:00pm to 6:00pm>" />
            </Picker>
          </View>
</View>

          <TouchableOpacity
            style={{
              backgroundColor: "#6d3c09",
              width: "50%",
              height: 40,
              marginTop: "5%",
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
                this.state.availability &&
                this.state.cause &&
                this.state.times &&
                this.state.days 
                ) {
                this.contribution();
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
          </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
