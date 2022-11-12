import { StyleSheet, Text, View } from 'react-native';
import { Balance } from "../../components/balance"

export function Home() {
  return (
    <View>
      <Balance saldo="1.345,90" gastos="-589,99"/>
      <Text>testando home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
    },
  });
  