const { error } = require('console');
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, content) => {
    if(err) return console.error(err);
    console.log('Contenido: ', content);
});

const nuevo = 'Linea anadida en ' + newDate() + '\n';

fs.appendFile('data.txt', nuevo, err => {
    if(err) return console.log(err);
    console.log('Se anadio nueva linea');
});