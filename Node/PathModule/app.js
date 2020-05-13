const path = require('path');

//this is an object with a bunch oof useful methods

console.log(path)
var pathObj= path.parse(__filename)


console.log(pathObj);


//praticamente se voglio lavorare con i path, è meglio usare l'ggetto path che lavorare con le stringe  