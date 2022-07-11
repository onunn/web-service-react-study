const express = require("express");
const http = require("http");
const path = require("path");
const serveStatic = require("serve-static");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const router = require("./routes/index");

const port = 5000;

app.use("/", router);

app.use('/', express.static(path.join( __dirname, '../client/build')));
app.get('/', function(req, res) {
    res.sendFile( path.join( __dirname, '../client/build/index.html'))
})

app.set("port", port);

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

app.use(
    function(req, res, next) {
        console.log('middle ware was calld: first');
        
    }
);

app.listen(port, () => console.log(`${port}`));
