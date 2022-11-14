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
  {
    id: 1,
    label: 'cliente X',
    name: 'João',
    sobrenome: 'Silva',
    idade: 20,
    sexo: 'Masculino',
    type: 1, //despesas
    value: '230,20'
  },
  {
    id: 2,
    name: 'saron',
    label: 'cliente Y',
    sobrenome: 'Silva',
    idade: 24,
    sexo: 'feminino',
    type: 0, //despesas
    value: '120,20'
  },
  {
    id: 3,
    name: 'Muxta',
    label: 'cliente Z',
    sobrenome: 'Silva',
    idade: 24,
    sexo: 'feminino',
    type: 0, //despesas
    value: '530,20'
  },
]
export function Home() {
  return (
    <View style={styles.container}>
      <Balance saldo="1.345,90" gastos="-589,99"/>
      <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={styles.list}
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
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#4534',
      padding: 15,
      borderRadius: 10,
      
    },
    title:{
      marginBottom: 20,
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0a0101',
      textAlign: 'center',
    }
});
  