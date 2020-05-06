const stdin = process.stdin
const stdout = process.stdout

stdin.setEncoding('utf8')
stdin.setRawMode(true)

stdin.on('data', (data) => {
  if (data === 'b') {
    stdout.write('\x07');
  }
  if (data >= 1 && data <= 9) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },data * 1000);
  } 
  if (data === '\u0003') {
    console.log('See you next time ciao!!!!')
    process.exit()
  }
})