import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { AntDesign,FontAwesome5 } from '@expo/vector-icons';
import { Styles } from '@expo/config-plugins/build/android';

export function Actions() {
return (
  <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={Styles.areaButton}>
                <AntDesign name="addfolder" size={50} color="black"></AntDesign>
              <Text style={styles.name}> Arquivos </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.areaButton}>
                <AntDesign name="creditcard" size={50} color="black"></AntDesign>
              <Text style={styles.name}> Cartão </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.areaButton}>
                <AntDesign name="qrcode" size={50} color="black"></AntDesign>
              <Text style={styles.name}> Qrcode </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.areaButton}>
                <AntDesign name="barschart" size={50} color="black"></AntDesign>
              <Text style={styles.name}> Bolsa </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.areaButton}>
                <AntDesign name="pdffile1" size={50} color="black"></AntDesign>
              <Text style={styles.name}> Leitor </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.areaButton}>
                <AntDesign name="creditcard" size={50} color="black"></AntDesign>
              <Text style={styles.name}> Cartão </Text>
          </TouchableOpacity>
  </ScrollView>
  );
}
const styles=StyleSheet.create ({

  container:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 0,
    maxHeight: 84,
    marginRight: 20,
    marginTop: 24,
    marginLeft: 40,
    backgroundColor: "#fff",
  },
  areButton:{
    color: '#40376E',
    gap: 16,
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 53,
    marginRight: 30,
  },
  name: {
    fontFamily: 'Roboto',
    marginRight: 23,
    gap: 16,
    alignItems: 'flex-start',
    fontSize: 15,
  }
})