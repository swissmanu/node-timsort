declare module 'timsort' {
  function sort<T>(xs: Array<T>): void;
  function sort<T>(xs: Array<T>, comparator: (a: T, b: T) => number): void;
  function sort<T>(xs: Array<T>, rangeFrom: number, rangeTo: number): void;
  function sort<T>(
    xs: Array<T>,
    comparator: (a: T, b: T) => number,
    rangeFrom: number,
    rangeTo: number
  ): void;

  export { sort };
}
