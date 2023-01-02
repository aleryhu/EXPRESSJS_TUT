/** @format */

const express = require('express');
const app = express();
const router = require('./routes/people');
const authRouter = require('./routes/auth');
// Static data
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
//  parse JSON
app.use(express.json());

// routers
app.use('/api/people', router);
app.use('/login', authRouter);

app.listen(5000, () => {
  console.log('Server Listening on port : 5000....');
});
