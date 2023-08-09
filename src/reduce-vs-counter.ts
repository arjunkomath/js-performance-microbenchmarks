import { setFlagsFromString } from 'v8';
import { runInNewContext } from 'vm';

setFlagsFromString('--expose_gc');

const gc = runInNewContext('gc');

function createTestArrOfLength(length: number): number[] {
  return new Array(length).fill(0).map((_, i) => i);
}

function benchmark(size: number): void {
  let sum;
  const testArr = createTestArrOfLength(size);
  console.log(`Benchmarking for array of size ${size}`);

  sum = 0;
  gc();
  console.time('reduce');
  sum = testArr.reduce((acc, curr) => acc + curr, 0);
  console.timeEnd('reduce');

  sum = 0;
  gc();
  console.time('counter');
  for (let i = 0; i < testArr.length; i++) {
    sum += testArr[i];
  }
  console.timeEnd('counter');

  gc();
  console.log('--------------------------');
}

[1000, 10000, 100000, 1000000, 10000000, 100000000].forEach((size) => {
  benchmark(size);
});
