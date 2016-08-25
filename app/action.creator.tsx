import * as Actions from "./actions";

export default class ActionCreator {
  private dispatch: (action: any) => any;
  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public increment(amount: number) {
    this.dispatch(Actions.increment(amount));
  }

  public decrement(amount: number) {
    this.dispatch(Actions.decrement(amount));
  }
}
