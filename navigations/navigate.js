import React from 'react';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import BottomTab from '../screens/BottomTab';
import ContactUs from '../screens/ContactUs';
import Loading from '../screens/Loading';
import ForgotPassword from '../screens/ForgotPassword';
import Contribute from '../screens/Contribute';
import DonationBox from '../screens/DonationBox';
import SeekHelp from '../screens/SeekHelp';
import Enroll from '../screens/Enroll';
import TeamUp from '../screens/TeamUp';
import welcome from '../screens/welcome';
import Category from '../screens/Category';
import PastEvents from '../screens/PastEvents';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createBottomTabNavigator();




const Stack = createStackNavigator();

function MyStack() { 
    return (
      <Stack.Navigator >
      <Stack.Screen name="welcome" component={welcome} options={{headerShown:false}}/>  
       <Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown:false}}/>       
      
        
  <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      
      <Stack.Screen name="Category" component={Category} options={{title: 'Categories',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}} />
      
         <Stack.Screen name="SeekHelp" component={SeekHelp} options={{ title: 'Seek Help',
            headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}}/>
       
        <Stack.Screen name="Loading" component={Loading} options={{headerShown:false}}/> 
       
           <Stack.Screen name="Contribute" component={Contribute} options={{ title: 'Self Volunteering Form',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}}/>
             <Stack.Screen name="Enroll" component={Enroll} options={{ title: 'Enrollment',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}}/>
             <Stack.Screen name="DonationBox" component={DonationBox} options={{ title: 'Donation',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}}/>
               
                
                   <Stack.Screen name="TeamUp" component={TeamUp} options={{ title: 'Events',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{title: 'Forget Password',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}} />
       
       <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>  
       <Stack.Screen name="PastEvents" component={PastEvents} options={{ title: 'Events',
           headerTitleStyle: {
              color: '#e8c488',
            },
            headerStyle: {
              backgroundColor: "white",borderColor:"#e8c488",borderWidth:5,borderRadius:20
            },}}/>  
      </Stack.Navigator>
    );
  }

  export default MyStack;