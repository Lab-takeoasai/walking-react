export function increment(amount: number) {
  return {
    type: "INCREMENT",
    amount: amount,
  };
}
export function decrement(amount: number) {
  return {
    type: "DECREMENT",
    amount: amount,
  };
}
