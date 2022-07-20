import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Login from "./screens/Login";
import MyStack from "./navigations/navigate";

import { NavigationContainer } from "@react-navigation/native"


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
} 

const styles = StyleSheet.create({});
