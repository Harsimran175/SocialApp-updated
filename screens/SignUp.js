import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import firebase from 'firebase';
import db from '../config'
export default class SignUp extends React.Component {
  signUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    alert('User created!');

    db.collection('users').add({email:this.state.email, name:'Test!', password:this.state.password})

    this.props.navigation.replace('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    
  });
  }
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"#e8c488" }}>
        <Image
            source={require("../assets/wooden-table-designify.png")}
            
            style={{
            width:"100%",height:"50%",alignItems:"center",marginTop:"10%"
            }}
          />
        <ScrollView>
         

          <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: "5%",marginTop:"10%",color:"#6d3c09",alignSelf:"center",textShadowColor:"white",textShadowOffset:{width:2,height:2} }}>
            Let's Join
          </Text>
  
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
           
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
                fontSize:20
              }}
              placeholder="Email ID"
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
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
       
            }}
          >
         
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
                fontSize:20
              }}
              placeholder="Password"
              onChangeText={(val) => {
                this.setState({ password: val });
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
           
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
                fontSize:20
              }}
              placeholder="Confirm Password"
              onChangeText={(val) => {
                this.setState({ confirmPassword: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#6d3c09",
              width: "30%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.signUp()
            }}
          >
            <Text style={{ fontSize: 15, color: "white",alignSelf:"center" ,fontWeight:"bold"}}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", marginTop: 20, color: "black",fontSize:17 }}>
            Already have an account?
            <Text
              style={{ color: "#6d3c09", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("Login");
              }}
            >
              {" "}
              Login
            </Text>{" "}
          </Text>
     
        </ScrollView>
      </View>
    );
  }
}
