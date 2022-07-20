import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity,FlatList,StyleSheet } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput,SafeAreaView,SectionList } from "react-native";
import Constants from 'expo-constants';
const ListItem = ({ item }) => {
  return (
    <View >
      <Image
        source={{
          uri: item.uri,
        }}
        style={{alignItems: 'center',
    width: 150,
    height: 130,borderWidth:5,
    borderRadius: 10,borderColor:"orange"}}
      />
      <Text>{item.text}</Text>
    </View>
  );
};
 
export default class Category extends React.Component {
  render() {
    return (
      
      <View style={{flex:1,backgroundColor:"#e8c488"}}>
<ScrollView>
        
  <View>
        
           <View style={{  marginTop: "15%" }}>
              <Text style={{  color: "#6d3c09",
              fontSize: 20,
              fontWeight:"bold",
              padding:5,
              marginBottom:"10%",borderWidth:5,
              borderColor:"white",marginLeft:10,
              borderRadius:10}}>
               Events....
              </Text>
            </View>

            <View >
              <SafeAreaView>
                <SectionList
                  contentContainerStyle={{
                    paddingHorizontal: 10,
                    borderRadius: 10,
                  }}
                  stickySectionHeadersEnabled={false}
                  sections={SECTIONS}
                  renderSectionHeader={({ section }) => (
                    <>
                      <Text >{section.title}</Text>
                      {section.horizontal ? (
                        <FlatList
                          horizontal
                          data={section.data}
                          renderItem={({ item }) => <ListItem item={item} />}
                          showsHorizontalScrollIndicator={false}
                        />
                      ) : null}
                    </>
                  )}
                  renderItem={({ item, section }) => {
                    if (section.horizontal) {
                      return null;
                    }
                    return <ListItem item={item} />;
                  }}
                />
              </SafeAreaView>
            </View>
           

          </View>
           <View >
            <Text
            style={{
              color: "#6d3c09",
              fontSize: 20,
              fontWeight:"bold",
              padding:5,
              marginLeft:10,
              marginTop:"10%",borderWidth:5,
              borderColor:"white",
              borderRadius:10
            }}
          >
            Categories
          </Text>
          </View>


<View style={{flexDirection: "row",padding:10}}>
<View>
                <TouchableOpacity style={{ backgroundColor: "orange",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8,margin:16}}
               onPress={() => this.props.navigation.navigate("Enroll")}>  
               <Image
                source={require("../assets/enroll.png")}
            style={{  width: "70%",height: "70%",justifyContent:"center",alignSelf:"center",margin:"15%"}}
              />    
            </TouchableOpacity>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"25%"}}>Enroll</Text>
             </View>

<View>
                <TouchableOpacity style={{marginTop:"14%",backgroundColor: "orange",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8}}
               onPress={() => this.props.navigation.navigate("DonationBox")}>  
               <Image
                source={require("../assets/donationbox.webp")}
            style={{  width: "70%",height: "70%",justifyContent:"center",alignSelf:"center",margin:"15%"}}
              />    
            </TouchableOpacity>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"10%",marginTop:"10%"}}>Donation Box</Text>
             </View>
</View>
<View style={{flexDirection: "row",padding:10}}>
<View>
                <TouchableOpacity style={{ backgroundColor: "orange",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8,margin:16}}
               onPress={() => this.props.navigation.navigate("Contribute")}>  
               <Image
                source={require("../assets/contribute.jpg")}
            style={{  width: "70%",height: "70%",justifyContent:"center",alignSelf:"center",margin:"15%"}}
              />    
            </TouchableOpacity>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"20%"}}>Volunteer</Text>
             </View>

<View>
                <TouchableOpacity style={{ backgroundColor: "orange",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8,margin:16}}
               onPress={() => this.props.navigation.navigate("SeekHelp")}>  
               <Image
                source={require("../assets/seekhelp.png")}
            style={{  width: "70%",height: "70%",justifyContent:"center",alignSelf:"center",margin:"15%",marginLeft:"5%"}}
              />    
            </TouchableOpacity>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"20%"}}>Seek Help</Text>
             </View>
</View>
<View style={{flexDirection: "row",padding:10}}>

<View>
                <TouchableOpacity style={{ backgroundColor: "orange",height:120,width:100,borderRadius:8,elevation:4,shadowColor:"#6d3c09",shadowOpacity:0.25,shadowOffset:{width:0,height:2},shadowRadius:8,margin:16}}
               onPress={() => this.props.navigation.navigate("TeamUp")}>  
               <Image
                source={require("../assets/teamup.jpg")}
            style={{  width: "70%",height: "70%",justifyContent:"center",alignSelf:"center",margin:"15%"}}
              />    
            </TouchableOpacity>
             <Text style={{fontWeight:"bold",width:120,color:"#6d3c09",marginLeft:"30%"}}>Events</Text>
             </View>
</View>





        </ScrollView> 
  </View>
    );
  }
}






const SECTIONS = [
  // Creating sections for horizontal
  {
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://lh3.googleusercontent.com/proxy/BDka0951favDQArWNe2Q359skfF5Dfl_Y9o7s-xuzhVafWdDbZQlvK1xDmFcew6j_IN41LvO7MEIyPvO8BCEqZqesSS9q7WANxlNO9m8XdFsw9ccxmD40Ry64Q=w1200-h630-p-k-no-nu',
      },
      {
        key: '2',

        uri: 'https://im.whatshot.in/img/2017/Aug/13902596-1788036211473085-3801569526025290515-n-cropped-1504000473.jpg?wm=1&w=1200&h=630&cc=1',
      },

      {
        key: '3',

        uri: 'https://i.ytimg.com/vi/ZNqwXe8spHQ/hqdefault.jpg',
      },
      {
        key: '4',

        uri: 'https://th.bing.com/th/id/OIP.EMh-GYDkygosT27dZrZSFQHaDm?pid=ImgDet&rs=1',
      },
      {
        key: '5',
        uri: 'https://1.bp.blogspot.com/-NF3gy4OEUk0/Uywu1AAomnI/AAAAAAAADeI/IdiA_jploE8/s1600/12.jpg',
      },
    ],
  },
];
