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
import firebase from "firebase";
//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class Loading extends React.Component {
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.replace('Home')
      } else {
        this.props.navigation.replace('Login')
      
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
            <Text>Loading Screen</Text>
        </ScrollView>
      </View>
    );
  }
}
