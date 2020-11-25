import {HashRouter} from 'react-router-dom';
import AppRoute from './router/AppRoute';

function App() {
  return (
    <HashRouter>
      <AppRoute></AppRoute>
    </HashRouter>
  );
}

export default App;
