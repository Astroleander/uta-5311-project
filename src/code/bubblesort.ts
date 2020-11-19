import { swap } from "@/utils/utils";

export default function bubbleSort(arr) {
  let swapped = true;
  while (swapped){
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
}