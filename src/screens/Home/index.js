import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/Header'


export function Home() {
  return (
    <View style={styles.container}>
      <Text>Bem vindo Mateus</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  