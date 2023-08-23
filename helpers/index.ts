export const range = (range: number, callback: Function) => {
  console.time("execution time");
  for (let i = 0; i <= range; i++) {
    callback(i);
  }
  console.log("---------------------------");
  console.timeEnd("execution time");
  console.log("---------------------------");
};

export const getSize = (obj: object) => {
  const size = new TextEncoder().encode(JSON.stringify(obj)).length;
  const kiloBytes = size / 1024;
  console.log("---------------------------");
  console.log(`Size is: ${kiloBytes} kb`);
  console.log("---------------------------");
};
