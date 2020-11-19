import { swap } from "@/utils/utils";

export default function selectionsort(arr) {
  let minimum;
  for (let i = 0; i < arr.length; i++) {
    minimum = i;
    /** find minimum at unsorted part */
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      swap(arr, minimum, i)
    }
  }
  return arr;
}