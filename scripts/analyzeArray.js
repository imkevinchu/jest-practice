const getAverage = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  const length = arr.length;
  return sum / length;
};

const getMin = (arr) => {
  return Math.min(...arr);
};

const getMax = (arr) => {
  return Math.max(...arr);
};

const getLength = (arr) => {
  return arr.length;
};

export const analyzeArray = (arr) => {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: getLength(arr),
  };
};
