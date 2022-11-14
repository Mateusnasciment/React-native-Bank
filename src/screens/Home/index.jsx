import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Balance } from "../../components/balance"
import { Movements }  from '../../components/Movements';
/// lista abaixa, simulando string de api, do banco de dados
const list = [
  {id: 1, value: 100.00, date: "01/12/2022", type: "deposit"},
  {id: 2, value: 50.00, date: "01/12/2022", type: "withdraw"},
  {id: 3, value: 150.00, date: "01/12/2022", type: "deposit"},
  {id: 4, value: 200.00, date: "01/12/2022", type: "withdraw"},
  {id: 5, value: 250.00, date: "01/12/2022", type: "deposit"},
  {id: 6, value: 300.00, date: "01/12/2022", type: "withdraw"},
  {id: 7, value: 350.00, date: "01/12/2022", type: "deposit"},
  {id: 8, value: 400.00, date: "01/12/2022", type: "withdraw"},
  {id: 9, value: 450.00, date: "01/12/2022", type: "deposit"},
  {id: 10, value: 500.00, date: "01/12/2022", type: "withdraw"},
  {id: 11, value: 550.00, date: "01/12/2022", type: "deposit"},
  {id: 12, value: 600.00, date: "01/12/2022", type: "withdraw"},

]
export function Home() { 
  return (
    <View style={styles.container}>
      <Balance saldo="1.345,90" gastos="-589,99"/>
      <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={
            styles.list}
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Movements
            style={styles.movement}
            item={item}
            /> 
            )}
            showVerticalScrollIndicator={false}
        />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      marginButtom: 20,
      marginTop: 20,
      display: 'flex',
    },
    movement: {
      fontSize: 20,
    },
    list: {
      height: 150,
      gridColumnGap: 10,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#d3c5e6',
      padding: 15,
      borderRadius: 10,
    },
    title:{
      marginBottom: 20,
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'center',
    }
});
  


