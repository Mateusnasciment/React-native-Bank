import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { Header } from './src/components/Header';

export default function App() {
  return (
      <View>
        <Header />
        <Home />
      </View>
  );
}


