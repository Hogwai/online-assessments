const highAndLow = numbers => {
  const numArray = numbers.split(" ").map(Number);

  const max = Math.max(...numArray);
  const min = Math.min(...numArray);

  return `${max} ${min}`;
};