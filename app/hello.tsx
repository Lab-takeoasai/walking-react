import * as React from 'react';
import actions from "./action.creator";
import {State} from "./reducers";

export interface Props {
  content: string;
  value: State;
  actions: actions;
}

export default class MyComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <div>{this.props.content}</div>
        <div>{this.props.value.num}
          <button onClick={() => {this.props.actions.increment(1)}}>Increment</button>
          <button onClick={() => {this.props.actions.decrement(1)}}>Decrement</button>
        </div>
      </div>
    );
  }
}
