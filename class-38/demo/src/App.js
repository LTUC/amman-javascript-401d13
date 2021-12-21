import { Provider } from 'react-redux';
import FuncQuote from './component/FuncQuote'
import ClassQuote from './component/ClassQuote'

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <FuncQuote />
      <hr />
      <ClassQuote />
    </Provider>
  );
}

export default App;
