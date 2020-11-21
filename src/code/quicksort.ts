import { swap } from "@/utils/utils";

const quicksort = (arr, low, high) => {
  if (high - low < 1) return;

  /** partition by arr[high] as pivot value */
  const pivot_value = arr[high];
  let pivot = low;

  for (let i = low; i < high; i++) {
    if (arr[i] < pivot_value) {
      swap(arr, i, pivot);
      pivot ++;
    }
  }

  arr[high] = arr[pivot];
  arr[pivot] = pivot_value;

  quicksort(arr, low, pivot - 1);
  quicksort(arr, pivot + 1, high);
}

export default function qsort (arr) {
  quicksort(arr, 0, arr.length - 1);
  return arr;
}