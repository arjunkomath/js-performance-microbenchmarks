import { setFlagsFromString } from 'v8';
import { runInNewContext } from 'vm';

setFlagsFromString('--expose_gc');

const gc = runInNewContext('gc');

function getRandomInt(max: number = 999999): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function createMap(keys: number): Map<number, number> {
  let testMap: Map<number, number> = new Map();

  for (let i = 0; i < keys; i++) {
    testMap.set(i, getRandomInt());
  }

  return testMap;
}

function createObj(keys: number): { [key: number]: number } {
  let testObj: { [key: number]: number } = {};

  for (let i = 0; i < keys; i++) {
    testObj[i] = getRandomInt();
  }

  return testObj;
}

function benchmark(size: number): void {
  let testKey = getRandomInt(size);
  console.log(`Benchmarking for Map/Object of size ${size}, getting item at key ${testKey}`);
  gc();

  // Test Map
  console.time('map');
  let testMap = createMap(size);
  console.log("Got ->", testMap.get(testKey));
  console.timeEnd('map');

  gc();

  // Test Object
  console.time('object');
  let testObj = createObj(size);
  console.log("Got ->", testObj[testKey]);
  console.timeEnd('object');

  console.log('--------------------------');
}

[1000, 10000, 100000, 1000000, 10000000].forEach((size) => {
  benchmark(size);
});

