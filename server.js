const express = require('express');
const app = express();


var num = 5

app.set("view engine", "ejs")
// app.use(logger)

app.get('/', (req, res) => {
  console.log('new user');
  res.render('index', { text: 'aravan' })
});

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// function logger(req, res, next) {
//   console.log(req.originalUrl)
//   next()
// }

app.listen(3000)