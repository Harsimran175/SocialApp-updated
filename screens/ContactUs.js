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
import firebase from "firebase"
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Header, Icon, Avatar } from 'react-native-elements';

export default class ContactUs extends React.Component {


  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={{backgroundColor:"#e8c488",height:"100%"}}>
        <ScrollView>
         <View style={{ flex: 1,borderColor:"#e8c488",borderWidth:5,borderRadius:20, }}>
          <Header
            centerComponent={{
              text: 'Contact Us',
              style: {
                margin: 2,
                padding: 2,
                fontWeight: 'bold',
                fontSize: 19,
                 color: '#e8c488',
            
                 
              },
            }}
            backgroundColor={'white'}
            leftComponent={
              <Icon
                name="arrow-left"
                type="feather"
                color="black"
                onPress={() => this.props.navigation.goBack()}></Icon>
            }
                        rightComponent={
              <MaterialCommunityIcons
                name="logout"
                size={24}
                color="#6d3c09"
                style={{ marginTop: 5 }}
                onPress={() => {
                  this.logout();
                }}
              />
            }
          />
          </View>
  <View>
        <View style={{  flexDirection: 'row',marginLeft:"5%",borderBottomColor:"black",borderBottomWidth:1,height:"20%",borderRadius:2,width:"80%",padding:10}}>
          <MaterialIcons name="phone" size={20} color="green" style={{marginTop:"15%"}} />
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
           
              fontWeight: 'bold',
              color: 'black',
            }}>
            Phone:
          </Text>
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
              margin:10,
              color: 'black',
            }}>
            (+1)545360608
          </Text> 
          </View>

            <View style={{  flexDirection: 'row',marginLeft:"5%",borderBottomColor:"black",borderBottomWidth:1,height:"20%",borderRadius:2,width:"80%",padding:10}}>
          <MaterialIcons name="email" size={20} color="blue" style={{marginTop:"15%"}} />
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
            
              fontWeight: 'bold',
              color: 'black',
            }}>
            Email:
          </Text>
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
              margin:10,
              color: 'black',
            }}>
            info@socialapp.com
          </Text> 
          </View>

  <View style={{  flexDirection: 'row',marginLeft:"5%",borderBottomColor:"black",borderBottomWidth:1,height:"20%",borderRadius:2,width:"80%",padding:10}}>
          <MaterialIcons name="home" size={20} color="red" style={{marginTop:"15%"}} />
         <Text
            style={{
              fontSize: 15,
             marginTop:"15%",
             
              fontWeight: 'bold',
              color: 'black',
            }}>
            Address:
          </Text>
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
           
              color: 'black',
            }}>
            15 N Maple St,Canada
          </Text> 
      
          </View>

<View style={{  flexDirection: 'row',marginLeft:"5%",borderBottomColor:"black",borderBottomWidth:1,height:"20%",borderRadius:2,width:"80%",padding:10}}>
          <MaterialIcons name="facebook" size={20} color="blue" style={{marginTop:"15%"}} />
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
         
              fontWeight: 'bold',
              color: 'black',
            }}>
            facebook:
          </Text>
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
       
              color: 'black',
            }}>
            https://www.facebook.com/
          </Text> 
          </View>
<View style={{  flexDirection: 'row',marginLeft:"5%",borderBottomColor:"black",borderBottomWidth:1,height:"20%",borderRadius:2,width:"80%",padding:10,marginBottom:"20%"}}>
          <MaterialCommunityIcons name="instagram" size={20} color="red" style={{marginTop:"15%"}} />
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
           
              fontWeight: 'bold',
              color: 'black',

            }}>
            Instagram:
          </Text>
         <Text
            style={{
              fontSize: 15,
              marginTop: "15%",
              margin:10,
              color: 'black',
            }}>
            https://www.instagram.com/
          </Text> 
          </View>

</View>
        </ScrollView>
      </View>
    );
  }
}
