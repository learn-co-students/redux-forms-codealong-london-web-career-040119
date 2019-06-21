import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

import { createStore } from 'redux'
import reducer from './reducers/manageTodo'

import { Provider } from 'react-redux'

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CreateTodo />
        </div>
      </Provider>
    );
  }
}

export default App;
