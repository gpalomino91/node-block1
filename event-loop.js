const fs = require('fs');

console.log('1. Síncrono: Inicio');
setTimeout(() => console.log('4. Macrotarea: setTimeout 0ms'), 0);
Promise.resolve().then(() => console.log('3. Microtarea: Promise'));
process.nextTick(() => console.log('2. Microtarea especial: nextTick'));
fs.readFile(__filename, () => console.log('5. I/O callback: readFile'));
console.log('6. Síncrono: Fin');