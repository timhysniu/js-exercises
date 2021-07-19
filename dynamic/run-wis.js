const findWIS = require('./weighted-interval-scheduling');

const input = [
  {
    start: 0,
    end: 4,
    weight: 2,
  },
  {
    start: 2,
    end: 6,
    weight: 4,
  },
  {
    start: 5,
    end: 7,
    weight: 4,
  },
  {
    start: 3,
    end: 10,
    weight: 7,
  },
  {
    start: 8,
    end: 11,
    weight: 2,
  },
  {
    start: 9,
    end: 12,
    weight: 1,
  },
];

findWIS(input);