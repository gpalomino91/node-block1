console.log('Inicio');
setTimeout(() => console.log('Timeout 0ms'), 0);
Promise.resolve().then(() => console,log('Promise'));
console.log('Fin');