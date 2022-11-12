import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Balance } from "../../components/balance"
import  Movements  from '../../components/Movements';
/// lista abaixa, simulando string de api, do banco de dados
const list = [
  {
    id: 1,
    label: 'cliente X',
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
    sexo: 'Masculino',
    type: 1, //despesas
    value: '230,20'
  },
  {
    id: 2,
    nome: 'Maria',
    label: 'cliente Y',
    sobrenome: 'Silva',
    idade: 24,
    sexo: 'feminino',
    type: 0, //despesas
    value: '120,20'
  },
  {
    id: 3,
    nome: 'Muxta',
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
        keyExtractor={ (item) => String(item.id)}
        showVerticalScrollIndicator={false}
        renderItem={ ({item}) => String(item.id) }
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
    },
    title: {
      fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 12,
        marginRight: 10,
        marginTop: 10,
    },
    list: {
      marginEnd: 10,
      marignStart: 14,
    }
});
  