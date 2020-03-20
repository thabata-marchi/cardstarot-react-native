import {AppRegistry} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src';
import {name as appName} from './app.json';

export default function Main(){
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => App);