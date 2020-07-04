let express = require('express');
let port = 3000
let app = express();

let server= app.listen(port);

app.use(express.static('public'));

console.log("My server running at port " + port);

