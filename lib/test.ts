let testValue: number;

testValue = 3;

const myFunc = (): number => {
  testValue = 2;
  return testValue;
};

const endValue: number = myFunc() * 3;

module.exports = endValue;
