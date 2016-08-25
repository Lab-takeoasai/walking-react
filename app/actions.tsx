export default class DispatchActions {
  private dispatch: (action: any) => any;
  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch
  }

  public increment(amount: number) {
    this.dispatch({ type: "INCREMENT", amount: amount})
  }

  public decrement(amount: number) {
    this.dispatch({ type: "DECREMENT", amount: amount})
  }
}
