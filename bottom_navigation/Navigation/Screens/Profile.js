import * as React from 'react'
import { Text, View } from 'react-native';


export default function ProfileScreen(navigation) {
  return (
    <View style = {{flex:1 , alignItems: 'center', justifyContent: 'center'}}>
      <Text
       onPress={ () => navigation.navgate("Home")}
       style={{fontSize:25, fontWeight: 'bold'}}>
        Profile screen
      </Text>
     </View>

  );
}