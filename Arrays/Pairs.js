/* 
    Problem : Find out a Pair that is equal to a given sum. The pair shoudnt have same number twice. 
    Input:
    N = 7
    Arr[] = {4, 3, 7, 8, 6, 2, 1} given sum = 10,
    Output: { 6, 4 } or { 8, 2 }    
*/


/**
 * Solutions
 * Approach: 1 Brute Force
 * Time Complexity : O(N^2)
 * 
 * Approach 2 : Sort the array and take 2 pointers to traverse it with both ends(i= start,j = end). And take the sum of both end values. 
 * if currentSum > givenSum decrease j,  otherwise increase i.
 * Time Complexity : O(N^2)
 * 
 * Approach 3 : Use set in JS as set only stores a value single instance at a time. Traverse
 * Time Complexity : O(N^2)
 */


function findPairs( arr, sum) {
    const mySet = new Set();
    let res = [];
    arr.forEach(item => {
        let find = sum - item;
        if(mySet.has(find)){
            res.push(item);
            res.push(find);
        }
        else {
            mySet.add(item);
        }
    })
    return res;

}

let res = findPairs([10, 5, 2, 3, -6, 9, 11], 22);
console.log(res);

