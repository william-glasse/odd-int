const oddInt = (integers) => {
  const integerCounts = {};
  integers.forEach((integer) => {
    if (integer in integerCounts) {
      integerCounts[integer] += 1;
    } else {
      integerCounts[integer] = 1;
    }
  });
  const oddOne = Object.keys(integerCounts).find(
    (key) => integerCounts[key] % 2 === 1,
  );
  return parseInt(oddOne, 10);
};

module.exports = oddInt;
