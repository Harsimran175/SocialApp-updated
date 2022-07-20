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
export default class TeamUp extends React.Component {
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
                        this.props.navigation.navigate("PastEvents");
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
            Child Welfare Program
          </Text>
   <Image
              source={require('../assets/ngopic.jpg')}
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
            }}>Child welfare systems typically receive and investigate reports of possible child abuse and neglect; provide services to families that need assistance in the protection and care of their children; arrange for children to live with kin or with foster families.</Text>
             <Text
            style={{
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Location : Tiruvannamalai, India
          </Text>
            <Text
            style={{
              fontSize: 15,
              padding: 10,
              fontWeight: 'bold',
              color: '#6d3c09',
            }}>
            Date : July 15, 2022
          </Text>

        </ScrollView>
      </View>
    );
  }
}
