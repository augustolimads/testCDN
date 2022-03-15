console.log('hello cdn');

const dataTest = { valueA: 2, valueB: ['a', 'b', 'c'] };

const value = 1;

const testPromise = new Promise((resolve, reject) => {
  resolve({ dataTest, value });
});
