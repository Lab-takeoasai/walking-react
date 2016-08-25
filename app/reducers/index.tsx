export function counter(state = { num: 0 }, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return { num: state.num + action.amount };
    case "DECREMENT":
      return { num: state.num - action.amount };
    default:
      return state
  }
}
