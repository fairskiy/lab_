let array = [
  "Kiev",
  "Symu",
  "Paris",
  "Odessa",
  "Lviv",
  "New York",
  "Chernigov",
  "Kramatorsk",
];
const removeElement = (arr, items) => {
  return arr.filter((element) => !items.includes(element));
};
array = removeElement(array, ["Symu", "Odessa", "Lviv", "Chernigov"]); // 
array = removeElement(array, "Paris"); // 