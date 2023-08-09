# JS Performance Microbenchmarks
 
This repository contains a collection of JavaScript microbenchmarks, they aren't very scientific but they do give a rough idea of how different approaches to the same problem compare.

## Running the benchmarks

Use `tsc` to compile the TypeScript files to JavaScript, then run them with `node`.

## Results

### Map vs Object

```
Benchmarking for Map/Object of size 1000, getting item at key 917
Got -> 97652
map: 0.468ms
Got -> 486446
object: 0.208ms
--------------------------
Benchmarking for Map/Object of size 10000, getting item at key 3606
Got -> 189320
map: 2.187ms
Got -> 174532
object: 1.232ms
--------------------------
Benchmarking for Map/Object of size 100000, getting item at key 85475
Got -> 182903
map: 7.474ms
Got -> 515607
object: 3.007ms
--------------------------
Benchmarking for Map/Object of size 1000000, getting item at key 679570
Got -> 849379
map: 123.776ms
Got -> 945484
object: 19.488ms
--------------------------
Benchmarking for Map/Object of size 10000000, getting item at key 3942805
Got -> 283339
map: 2.187s
Got -> 451462
object: 199.551ms
```

### Loops

```
Benchmarking for array of length 1000
for-each: 0.057ms
for: 0.081ms
while: 0.024ms
--------------------------
Benchmarking for array of length 10000
for-each: 0.104ms
for: 0.144ms
while: 1.139ms
--------------------------
Benchmarking for array of length 100000
for-each: 1.513ms
for: 3.081ms
while: 1.291ms
--------------------------
Benchmarking for array of length 1000000
for-each: 6.465ms
for: 6.49ms
while: 5.65ms
--------------------------
Benchmarking for array of length 10000000
for-each: 49.334ms
for: 56.566ms
while: 56.672ms
--------------------------
Benchmarking for array of length 100000000
for-each: 659.23ms
for: 591.67ms
while: 562.518ms
```
