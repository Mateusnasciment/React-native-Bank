import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { Header } from './src/components/Header';
import { Actions } from './src/components/Actions';
import { Helpe } from './src/components/Helpe';

export default function App() {
  return (
      <View>
        <Header />
        <Home /> 
        <Actions />
        <Helpe />
      </View>
  );
}


