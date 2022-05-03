/**
 * Generates a random integer between min and max, similar to the random
 * integer functionality in Python or C#.
 * - Time: O(1)
 * - Space: O(1)
 * 
 * @param {Number} min The smallest value that can be returned
 * @param {Number} max The largest value that can be returned
 * @returns The random integer between min and max
 */
function randInt(min, max) {
    const randomNum = Math.round(Math.random() * (max - min)) + min;
    console.log(min, max, randomNum);
    return randomNum;
}

/**
 * A function to swap the values in an array at index idxA and index idxB
 * without using a temp variable.
 * - Time: O(1)
 * - Space: O(1)
 * 
 * @param {Array<Number>} arr The input array
 * @param {Number} idxA The index of the first element to be swapped with the value at idxB
 * @param {Number} idxB The index of the second element, to be swapped with the value at idxA
 */
function swapValuesAtIdxs(arr, idxA, idxB) {
    arr[idxA] += arr[idxB];
    arr[idxB] = arr[idxA] - arr[idxB];
    arr[idxA] -= arr[idxB];
}

/**
 * An implementation of Hoare's partitioning algorithm. Selects a random index
 * between i and j and compares the value at that random index to the values at
 * indices i and j. While the value at index i is less than the value at the
 * random index, i is incrememented by 1. Similarly, j is decremented by 1
 * while the value at index j is greater than the value at random index. After
 * incrementing until those conditions are no longer true, the values at i and
 * j are swapped. It continues until i === j, at which point it breaks out of
 * the outer loop and returns j.
 * - Time: O(N^2) (?)
 * - Space: O(1)
 * 
 * @param {Array<Number>} arr The array of numbers to be partitioned
 * @param {Number} i i is the left-most index that partition() should look at
 * @param {Number} j the right-most index that partition() should look at
 * @returns The ending index of the value at the pivot point
 */
function partition(arr, i = 0, j = arr.length - 1) {
    const randomIndexValue = arr[randInt(i, j)];

    while (true) {
        while (arr[i] < randomIndexValue) {
            i++;
        }

        while (arr[j] > randomIndexValue) {
            j--;
        }

        if (i === j) break;

        swapValuesAtIdxs(arr, i, j);
    }

    return j;
}

/**
 * Sorts an unsorted array of numbers by recursively calling partition() on
 * segments of the array that have yet to be sorted.
 * - Time: O(N^3) (?)
 * - Space: O(1)
 * 
 * @param {Array<Number>} arr Array of numbers to be sorted
 * @param {Number} leftBoundary The left-most bound of the segment of arr to
 *     be sorted
 * @param {Number} rightBoundary The right-most bound of the segment of arr to
 *     be sorted
 */
function quickSort(arr, leftBoundary = 0, rightBoundary = arr.length - 1) {
    if (rightBoundary - leftBoundary < 1) {
        return;
    }

    const pvtIdx = partition(arr, leftBoundary, rightBoundary);
    quickSort(arr, leftBoundary, pvtIdx - 1);
    quickSort(arr, pvtIdx + 1, rightBoundary);
}

let arr = [ 4, 8, 5, 7, 1, 6, 10, 2, 3, 9 ];
quickSort(arr);
console.log(arr);

let arr2 = [ 23, 101, 4, 192, 1, 3, 5 ];
quickSort(arr2);
console.log(arr2);

let arr3 = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
quickSort(arr3);
console.log(arr3);


// node quickSort.js