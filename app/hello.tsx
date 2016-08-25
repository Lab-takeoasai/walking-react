import * as React from 'react';
import actions from "./actions";

export interface Props {
  content: string;
  value: {
    num: any;
  };
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
