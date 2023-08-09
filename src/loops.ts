import { setFlagsFromString } from 'v8';
import { runInNewContext } from 'vm';

setFlagsFromString('--expose_gc');

const gc = runInNewContext('gc');

function createTestArrOfLength(length: number): number[] {
  return new Array(length).fill(0).map((_, i) => i);
}

function benchmark(testArr: number[]): void {
  let sum = 0;
  console.log(`Benchmarking for array of length ${testArr.length}`);

  // Test for each
  gc();
  sum = 0;
  console.time('for-each');
  testArr.forEach((i) => {
    sum += i;
  });
  console.timeEnd('for-each');


  // Test For
  gc();
  sum = 0;
  console.time('for');
  for (let i = 0; i < testArr.length; i++) {
    sum += testArr[i];
  }
  console.timeEnd('for');


  // Test while
  gc();
  sum = 0;
  console.time('while');
  let i = 0;
  while (i < testArr.length) {
    sum += testArr[i];
    i++;
  }
  console.timeEnd('while');

  console.log('--------------------------');
}

[1000, 10000, 100000, 1000000, 10000000, 100000000].forEach((length) => {
  benchmark(createTestArrOfLength(length));
});
