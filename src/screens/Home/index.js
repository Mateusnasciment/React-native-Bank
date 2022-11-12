import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Balance } from "../../components/balance"

export function Home() {
  return (
    <View>
      <Balance saldo="1.345,90" gastos="-589,99"/>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        sytyles={styles.list}
        data={list}
        keycExtractor={item => item.id}
        />
    </View>
  );
}
const list = [
  {
    id: 1,
    nome: 'João',
    sobrenome: 'Silva',
    idade: 20,
    sexo: 'Masculino',
    type: 0, //despesas
    value: '230,20'
  },
  {
    id: 1,
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 20,
    sexo: 'feminino',
    type: 0, //despesas
    value: '230,20'
  },
]
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
      flex: 1,
      marginEnd: 10,
      marignStart: 14,
    }
});
  