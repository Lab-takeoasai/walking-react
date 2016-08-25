import {ActionType} from "../constants";

export function increment(amount: number) {
  return {
    type: ActionType.Increment,
    amount: amount,
  };
}
export function decrement(amount: number) {
  return {
    type: ActionType.Decrement,
    amount: amount,
  };
}
