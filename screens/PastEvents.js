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

//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class PastEvents extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"#e8c488" }}>
        <ScrollView>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:"10%"}}>
            <TouchableOpacity style={{marginTop:"10%",borderRadius:10,width:160,backgroundColor:"#6d3c09"}}
            onPress={() => {
                        this.props.navigation.navigate("TeamUp");
                      }}
                    >
                    <Text style={{padding:13,fontWeight:"bold",color:"white",fontSize:16}}>Upcoming Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:"10%",borderRadius:10,width:160,backgroundColor:"#6d3c09",marginLeft:"6%"}}
            onPress={() => {
                        this.props.navigation.navigate("TeamUp");
                      }}
                    >
                    <Text style={{alignSelf:"center",padding:13,fontWeight:"bold",color:"white",fontSize:16}}>Past Events</Text>
            </TouchableOpacity>
          </View>

           <Text
            style={{
              fontSize: 20,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Medical Welfare
          </Text>
   <Image
              source={require("../assets/health-camp.jpg")}
              style={{
                width: "90%",
                height: 200,
                borderRadius: 20,
                padding:10,margin:10
              }}
            />
          <Text style={{
              fontSize: 15,
              padding: 10,
              color: '#6d3c09',
            }}>Welfare Medical is focused to meet the modern day needs of Healthcare and is dedicated to providing innovative products which improve patient outcomes whilst satisfying the pressing Economic demands</Text>
             <Text
            style={{
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Location : Nagpur, India
          </Text>
            <Text
            style={{
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Date : June 1, 2022
          </Text>


 <Text
            style={{
              fontSize: 20,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
              marginTop:"10%"
            }}>
           Women Welfare Programme
          </Text>
   <Image
              source={require('../assets/tailoring-class2.jpg')}
              style={{
                width: "90%",
                height: 200,
                borderRadius: 20,
                padding:10,margin:10
              }}
            />
          <Text style={{
              fontSize: 15,
              padding: 10,
              color: '#6d3c09',
            }}>The Welfare of Women global health programme is a completely new initiative by The Global Library of Women’s Medicine and is an ambitious attempt to try and provide these health professionals with immediate access to the latest, state-of-the-art, information on women’s health and on the ‘best practice’ management of relevant clinical conditions.</Text>
             <Text
            style={{
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Location : Mumbai, India
          </Text>
            <Text
            style={{
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Date : May 25, 2022
          </Text>
        </ScrollView>
      </View>
    );
  }
}
