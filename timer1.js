const array = (process.argv).slice(2);
const maxNum = Math.max(...array);

for (let i = 1; i <= maxNum; i++) {
  setTimeout(() => {
    if (array.includes(i.toString())) {
      process.stdout.write('\x07');
    }
  },i * 1000);
} 