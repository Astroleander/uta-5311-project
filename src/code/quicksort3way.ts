import { swap } from "@/utils/utils";

const quicksort = (arr, low, high) => {
  // console.log(arr, arr.slice(low, high + 1))
  if (high - low < 1) return;

  const pivot_value = arr[high];
  let p_low = low, p_high = high;

  /**
   * |   part     |part|    |  part |
   * |    lt      | eq |todo|   gt  x pivot_value
   * |------------|----|----|-------|
   * low          ^    ^    ^       high
   *           p_low   i    p_high
   * 
   * part lt [low, p_low)
   * part eq [p_low, i)
   * pivot   [i]
   * part gt [p_high, high)
   */

  for (let i = low; i < p_high;) {
    // console.log(arr)
    // console.table({
    //   undo: String(arr.slice(i, p_high)),
    //   pivot: String(arr[high]),
    //   lt: String(arr.slice(low, p_low)),
    //   eq: String(arr.slice(p_low, i)),
    //   gt: String(arr.slice(p_high, high)),
    // })
    /** case 1, swap arr[i] into [part lt], [part ls] expands, the one been swaped has been visited */
    if (arr[i] < pivot_value) {
      swap(arr, i, p_low);
      p_low ++;// count + 1
      i++
    }
    /** case 2, swap arr[i] into [part gt], [part gt] expands, the one been swaped has not been visited */
    else if (arr[i] > pivot_value) {
      swap(arr, i, p_high - 1);
      p_high --;  // count + 1
    }
    /** case 3, equal to pivot, keep going on */
    else {
      i++
    }
  }
  // console.table({
  //   undo: String(arr.slice(p_high - 1, p_high - 1)),
  //   pivot: String(arr[high]),
  //   lt: String(arr.slice(low, p_low)),
  //   eq: String(arr.slice(p_low, p_high - 1)),
  //   gt: String(arr.slice(p_high, high)),
  // })
  /** i === p_high - 1 at ends */

  arr[high] = arr[p_high];
  arr[p_high] = pivot_value;
  
  quicksort(arr, low, p_low - 1);
  quicksort(arr, p_high + 1, high);
}

export default function qsort (arr) {
  quicksort(arr, 0, arr.length - 1);
  return arr;
}