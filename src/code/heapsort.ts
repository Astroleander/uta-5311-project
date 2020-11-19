import { swap } from "@/utils/utils";

const shiftdown = (arr, i, n) => {
  let left = i * 2;
  let right = i * 2 + 1;
  let maximum;

  /** find maximum */
  if (right < n) {
    if (arr[left] > arr[right]) {
      maximum = left;
    } else {
      maximum = right;
    }
  } else if (left < n) {
    maximum = left;
  } else {
    return;
  }

  if (arr[i] < arr[maximum]) {
    swap(arr, i, maximum);
    shiftdown(arr, maximum, n);
  }
  return;
}

export default function heapsort(arr) {
  /** max heapify */
  for (let i = ~~(arr.length / 2) - 1; i >= 0; i--) {
    shiftdown(arr, i, arr.length);
  }

  /** shiftdown the root to arr[i] one by one */
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    shiftdown(arr, 0, i);
  }
  return arr;
}