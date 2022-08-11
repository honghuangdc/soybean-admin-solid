/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import { setupAssets } from './plugins';

function setupApp() {
  setupAssets();

  const containerEl = document.getElementById('root');
  render(() => <App />, containerEl!);
}

setupApp();
