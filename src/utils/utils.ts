export const swap = (arr, a, b) => {
  let tmp = arr[b];
  arr[b] = arr[a];
  arr[a] = tmp;
}
