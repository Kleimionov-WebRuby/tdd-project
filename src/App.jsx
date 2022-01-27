import { Provider } from 'react-redux';

import store from './configureStore';
// import Counter from './Counter';
import Jotto from './Jotto';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div data-test="component-app" className="App">
        {/* <Counter /> */}
        <Jotto />
      </div>
    </Provider>
  );
}

export default App;
