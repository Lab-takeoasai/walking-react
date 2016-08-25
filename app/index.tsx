import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from "./store";
import Actions from "./action.creator";
import Hello from "./hello";

function render() {
  ReactDOM.render(<Hello value={store.getState()} actions={new Actions(store.dispatch)} content="[hello world]"/>, document.getElementById('app'));
}

render();
store.subscribe(render);
