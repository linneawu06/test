var express = require('express');
var engine = require('ejs-locals');


var path= require('path');
var index = require('./routers/index');
var products = require('./routers/products');
var protfolio = require('./routers/protfolio');

var app = express()

app.engine('ejs', engine);
app.engine('ejs', require('express-ejs-extend')); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/products', products);
app.use('/protfolio',protfolio);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('error', {
      title: '此頁面不存在，請您點選網站提供的頁面選單進行瀏覽。',
      description:'您所找尋的頁面，無相關資訊。再請瀏覽網站提供的相關頁面，找尋符合您需求的資料。',
      stylefile:'/assets/css/error.css',
    });
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

let port = process.env.PORT || 3000
app.listen(port);