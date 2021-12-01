/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/
function swapNumbers(nums, currentIndex, nextIndex) {
  const lowerNumber = nums[nextIndex];
  const higherNumber = nums[currentIndex];
  nums[currentIndex] = lowerNumber;
  nums[nextIndex] = higherNumber;
}

function bubbleSort(nums) {
  let arrayIsSorted = false;

  while (arrayIsSorted === false) {
    let didASwapOccur = false;
    for (let index = 0; index < nums.length; index++) {
      const currentIndex = index;
      const nextIndex = index + 1;

      const isSwapRequired = nums[currentIndex] > nums[nextIndex];
      if (isSwapRequired) {
        didASwapOccur = true;
        swapNumbers(nums, currentIndex, nextIndex);
      }
    }

    if (!didASwapOccur) {
      arrayIsSorted = true;
    }
  }

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
