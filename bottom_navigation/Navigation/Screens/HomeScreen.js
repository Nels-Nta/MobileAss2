import * as React from 'react'
import { Text, View } from 'react-native';


export default function HomeScreen(navigation) {
  return (
    <View style = {{flex:1 , alignItems: 'center', justifyContent: 'center'}}>
      <Text
       onPress={ () => alert ('This is the "Home" screen')}
       style={{fontSize:25, fontWeight: 'bold'}}>
        Hello screen
      </Text>
     </View>

  );
}