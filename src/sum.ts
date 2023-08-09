function createTestArrOfLength(length: number): number[] {
  return new Array(length).fill(0).map((_, i) => i);
}

(function run(): void {
    let arr = createTestArrOfLength(100000000);

    let sum = 0;
    arr.forEach((i) => {
        sum += i;
    });

    console.log(sum);
})();
