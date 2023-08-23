// 32 16  8 4 2 1
//        0 0 0 0
//        0 1 0 0 = 4
//        0 1 0 1 = 5
//        0 0 0 1 = 1

const isEven = (num: number) => (num & 1) !== 0;

//        0 1 0 0 = 4
//        0 0 0 1 = 1
//        0 0 0 0 =
console.log(isEven(4));
