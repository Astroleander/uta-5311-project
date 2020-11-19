const merge = (left_arr, right_arr) => {
  let merge = [], left = 0, right = 0;

  // We will concatenate values into the resultArray in order
  while (left < left_arr.length && right < right_arr.length) {
    if (left_arr[left] < right_arr[right]) {
      merge.push(left_arr[left]);
      left++;
    } else {
      merge.push(right_arr[right]);
      right++;
    }
  }

  return merge.concat(left_arr.slice(left)).concat(right_arr.slice(right));
}

export default function mergesort(arr) {
  if (arr.length <= 1) return arr;

  const middle = ~~(arr.length / 2);

  const left_arr = arr.slice(0, middle);
  const right_arr = arr.slice(middle);

  return merge(mergesort(left_arr), mergesort(right_arr));
}