import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import DevTools from './DevTools';

import NitroRecorder from '../nitrorecorder';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <Provider id="root-provider" store={store}>
          <div>
            <TodoApp />

          </div>
        </Provider>
      </div>
    );
  }
}