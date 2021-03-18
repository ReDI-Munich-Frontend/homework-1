// Array methods

/** 1. Exercise: Counting with Array.forEach()
 *
 * Given an array with numbers
 * write a function
 * which counts all values in the array
 * and returns the sum
 * The solution must use `forEach`.
 *
 * i.e:
 * const numbers =[1,2,3]
 * sumForEach(numbers) should return 6
 */

function sumForEach(array) {
  let count = 0;

  // your code here

  return count;
}

/** 2. Exercise: Returning a new array with Array.forEach()
 *
 * Given an array which contains objects
 * with firstName and lastName
 * write a function
 * which returns a new array with full name
 * The solution must use `forEach`.
 *
 * i.e:
 * const employees = [
 *  {firstName: 'Alice', lastName: 'Airy' },
 *  {firstName: 'Bob', lastName: 'Bubble'}
 * ]
 * fullNameForEach(employees) should return
 * ['Alice Airy', 'Bob Bubble']
 */

function fullNameForEach(array) {
  let fullNameArray = [];

  // your code here

  return fullNameArray;
}

/** 3. Exercise: Returning a new array with Array.map()
 *
 * Given an array which contains objects
 * with firstName and lastName
 * write a function
 * which returns a new array with full name
* The solution must use `map`.

 * i.e:
 * const employees = [
 *  {firstName: 'Alice', lastName: 'Airy' },
 *  {firstName: 'Bob', lastName: 'Bubble'}
 * ]
 * fullNameMap(employees) should return
 * ['Alice Airy', 'Bob Bubble']
 */

function fullNameMap(array) {
  // your code here  ;
}

/** 4. Exercise: Filter an array with numbers using Array.filter()
 *
 * Given an array which contains numbers
 * write a function
 * which returns a new array with only even numbers
* The solution must use `filter`.

 * i.e:
 * const numbers = [1,2,3,4,5,6]
 * filterByEven(employees) should return [2,4,6]
 */
function filterByEven(array) {
  // your code here  ;
}

/** 5. Exercise: Filter an array with objects using Array.filter()
 *
 * Given an array which contains objects
 * with name and status
 * write a function
 * which returns a new array with only objects where status equals 'accepted' 
* The solution must use `filter`.

 * i.e:
 * const invitations = [
 *  {name: 'Alice', status: 'invited'},
 *  {name: 'Bob', status: 'invited'},
 *  {name: 'Carol', status: 'accepted'},
 *  {name: 'Dan', status: 'rejected'},
 * ]
 * filterByAccepted(employees) should return [{name: 'Carol', status: 'accepted'}]
 */
function filterByAccepted(array) {
  // your code here  ;
}

/** 6. Exercise: Counting using Array.reduce()
 *
 * Given an array with numbers
 * write a function
 * which counts all values in the array
 * and returns the sum
 * The solution must use `reduce`.
 *
 * i.e:
 * const numbers =[1,2,3]
 * sumReduce(numbers) should return 6
 */
function sumReduce(array) {
  // your code here  ;
}

/** 7. Exercise: Transforming using Array.reduce()
 *
 * Given an array with objects
 * with name and ids
 * write a function
 * which returns a new object where id is the key
 * The solution must use `reduce`.
 *
 * i.e:
 * const employees = [
 *  {name: 'Alice', id: 3},
 *  {name: 'Bob', id: 7}
 *]
 * reduceArrayToObject(array) should return
 *
 * {
 *     3: { name: "Alice", id: 3 },
 *     7: { name: "Bob", id: 7 },
 *   }
 */
function reduceArrayToObject(array) {
  // your code here  ;
}

export {
  sumForEach,
  fullNameForEach,
  fullNameMap,
  filterByEven,
  filterByAccepted,
  sumReduce,
  reduceArrayToObject,
};
