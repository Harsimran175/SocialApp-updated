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
import firebase from 'firebase'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
   alert('Welcome Back!')
   this.props.navigation.navigate('BottomTab')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
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
        
          <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: "10%",color:"#6d3c09" ,marginTop:"10%",textShadowColor:"white",textShadowOffset:{width:2,height:2}}}>
            Welcome to Social App
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
                fontSize:20,
                color:"black"
              }}
              placeholder="Email"
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
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
                 fontSize:20,
                 color:"black"
              }}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
           
          </View>

          <Text
            style={{
              marginTop: 10,
              color: "#6d3c09",
              fontWeight: "bold",
              alignSelf: "flex-end",
              marginHorizontal: "5%",
              
            }}
            onPress={() => {
              this.props.navigation.navigate("ForgotPassword");
            }}
          >
            Forgot Password?
          </Text>

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
              this.login()
            }}
          >
            <Text style={{ fontSize: 19, color: "white",fontWeight:"bold"}}>Login</Text>
          </TouchableOpacity>

         
          <Text style={{ alignSelf: "center", marginTop: 20, color: "black",fontSize:17 }}>
            Dont have an account?
            <Text
              style={{ color: "#6d3c09", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("SignUp");
              }}
            >
              {" "}
              SignUp
            </Text>{" "}
          </Text>
      
         
        </ScrollView>
      </View>
    );
  }
}
