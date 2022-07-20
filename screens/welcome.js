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
export default class Welcome extends React.Component {
  render() {
    return (
      <View style={{ flex:  2,backgroundColor:"#e8c488"}}>
    
   
            <Image
      source={require("../assets/wooden-table-designify.png")}
  resizeMode={"stretch"}
  
      style={{width:"100%",height:"70%",alignItems:"center"}}
      
  /> 
         <Text style={{padding:10,fontWeight:"bold",color:"#6d3c09",fontSize:26,alignSelf:"center",marginTop:"10%",textShadowColor:"white",textShadowOffset:{width:2,height:2}}}>Make The World Better</Text>
          
              <TouchableOpacity style={{alignSelf:"center",marginTop:"10%",borderRadius:10,width:150,backgroundColor:"#6d3c09"}}
            onPress={() => {
                        this.props.navigation.navigate("Login");
                      }}
                    >
                    <Text style={{padding:13,fontWeight:"bold",color:"white",fontSize:16}}>Start to help</Text>
            </TouchableOpacity>
        <ScrollView>
  
          
        </ScrollView>
      
      </View>
    );
  }
}