const express = require("express");
const bodyParser = require('body-parser');
const http=require("http")
const path = require("path");

const cookieParser = require('cookie-parser')

const mongooseConnection = require("./server/libs/mongooseConnect.js");

var categorieRouter = require("./server/route/categorieRouter.js");
var productRouter = require("./server/route/productRouter.js")
var aboutRouter = require("./server/route/aboutRouter.js")
var contactRouter = require("./server/route/contactRouter.js")
var langRouter = require("./server/route/setLangRouter.js")
var itemRouter = require("./server/route/singleRouter.js")





const app = express();

app.use(express.static(path.join(__dirname, 'dist')));


//connect mongodb
mongooseConnection();
app.use(cookieParser())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});



// app.use('/ru',(req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
// app.use('/ru/categories',(req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// app.use("/ru",categorieRouter);
app.use("/categories",categorieRouter);
app.use("/products",productRouter);
app.use("/about",aboutRouter);
app.use("/contact",contactRouter);
app.use("/setlanguage",langRouter);
app.use("/item",itemRouter);

const port = process.env.PORT || '5000';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,() => console.log('Running'))
