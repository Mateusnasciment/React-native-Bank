import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { Header } from './src/components/Header';
import { Actions } from './src/components/Actions';
export default function App() {
  return (
      <View>
        <Header />
        <Home />
        <Actions />
      </View>
  );
}


