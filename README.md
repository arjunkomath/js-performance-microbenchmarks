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
### Reduce vs Counter

```
Benchmarking for array of size 1000
reduce: 0.067ms
counter: 0.171ms
--------------------------
Benchmarking for array of size 10000
reduce: 0.089ms
counter: 0.131ms
--------------------------
Benchmarking for array of size 100000
reduce: 1.012ms
counter: 1.815ms
--------------------------
Benchmarking for array of size 1000000
reduce: 0.363ms
counter: 0.969ms
--------------------------
Benchmarking for array of size 10000000
reduce: 3.277ms
counter: 9.815ms
--------------------------
Benchmarking for array of size 100000000
reduce: 32.436ms
counter: 93.603ms
--------------------------
```

### Sum of array (vs Rust)

JS
```
$ time node dist/sum.js         
4999999950000000
node dist/sum.js   20.79s  user 2.82s system 109% cpu 21.536 total
avg shared (code):         0 KB
avg unshared (data/stack): 0 KB
total (sum):               0 KB
max memory:                7946208 KB
page faults from disk:     0
other page faults:         1078900
```

Rust
```
$ time ./target/debug/vs-rust
sum: 4999999950000000
./target/debug/vs-rust   1.23s  user 0.08s system 99% cpu 1.315 total
avg shared (code):         0 KB
avg unshared (data/stack): 0 KB
total (sum):               0 KB
max memory:                782384 KB
page faults from disk:     1
other page faults:         49068
```