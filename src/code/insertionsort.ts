import { swap } from "@/utils/utils";

export default function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = i;
    let value = arr[i];
    let j = i - 1; /** pointer of sorted part */
    while (j > -1 && arr[j] > value) { /** move n times to right place */
      arr[j + 1] = arr[j]; /** move to left */ 
      j --;
    }
    arr[j + 1] = value;
  }
  return arr;
}