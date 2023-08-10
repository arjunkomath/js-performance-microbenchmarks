import { setFlagsFromString } from 'v8';
import { runInNewContext } from 'vm';

setFlagsFromString('--expose_gc');

const gc = runInNewContext('gc');

function createTestArrOfLength(length: number): number[] {
  return new Array(length).fill(0).map((_, i) => i);
}

function benchmark(size: number): void {
  const testArr = createTestArrOfLength(size);
  console.log(`Benchmarking for array of size ${size}`);

  const randomElementInArray = testArr[Math.floor(Math.random() * testArr.length)];

  gc();
  console.time('indexOf');
  testArr.indexOf(randomElementInArray);
  console.timeEnd('indexOf');

  gc();
  console.time('includes');
  testArr.includes(randomElementInArray);
  console.timeEnd('includes');

  gc();
  console.time('find');
  testArr.find((el) => el === randomElementInArray);
  console.timeEnd('find');

  gc();
  console.log('--------------------------');
}

[1000, 10000, 100000, 1000000, 10000000, 100000000].forEach((size) => {
  benchmark(size);
});
