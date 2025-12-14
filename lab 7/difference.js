const array1 = ["Warsawa", "Kiev", "Odessa", "Lviv", "Symu", "New York"];
const array2 = ["Kiev", "Warsawa", "Lviv", "Symu", "Tokyo"];
const result = difference(array1, array2);
function difference(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}
console.log(result);