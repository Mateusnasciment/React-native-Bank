import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; 
import { Styles } from '@expo/config-plugins/build/android';

export function Helpe() {
return (
  <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={Styles.areaButton}>
            <View>
                    <FontAwesome5 name="hands-helping" size={70} color="black" />
            
            </View>
          </TouchableOpacity>
  </ScrollView>
  );
}
const styles=StyleSheet.create ({

  container:{
    display: "flex",
    height: 84,
    borderRadius: 18,
    fontWeight: 'bold',
    padding: 0,
    maxHeight: 124,
    marginRight: 100,
    marginTop: 44,
    paddingTop: 0,
    marginLeft: 90,
    backgroundColor: "#4E8397",
  },
  areButton:{
    display: "flex",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
    paddngLeft: 10,
    paddingRight: 10,
    marginRight: 20,
  },
  name: {
    fontFamily: 'Roboto',
    alignItems: 'flex-start',
    fontSize: 19,
    marginLeft: 10,
    marginRight: 10,
  }
})