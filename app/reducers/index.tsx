import {ActionType} from "../constants";

export interface State {
  num: number;
}

export function counter(state = { num: 0 }, action: any): State {
  switch (action.type) {
    case ActionType.Increment:
      return { num: state.num + action.amount };
    case ActionType.Decrement:
      return { num: state.num - action.amount };
    default:
      return state
  }
}
