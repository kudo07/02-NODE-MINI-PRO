const nums = [1, 2, 3, 4];
const filteredNumbers = nums.map((num, index) => {
  if (index < 3) {
    return num;
  }
});
