import React, { Component } from "react";
import { View,StyleSheet ,Picker} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {MaterialIcons} from "@expo/vector-icons";

import Category from "../screens/Category";
import ContactUs from "./ContactUs"
const Tab = createBottomTabNavigator();
import { RFValue } from "react-native-responsive-fontsize";
export default class BottomTabNavigator extends Component {
  render() {
    return (
       <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Category') {
            return<Ionicons name="md-home" size={24} color={color} />
          } else if (route.name === 'ContactUs') {
            return<Ionicons name="open" size={24} color={color} />
          }

          
        },
        tabBarActiveTintColor: '#6d3c09',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="ContactUs" component={ContactUs}   options={{ headerShown: false }}/>
    </Tab.Navigator>
      
  );
}
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

