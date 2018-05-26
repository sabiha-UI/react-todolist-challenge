import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const ToDoApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<ToDoApp />, document.getElementById('root'));
registerServiceWorker();
