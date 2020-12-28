const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;
const coloursRouter = require('./routes/colours.router');
const paletteRouter = require('./routes/palette.router');

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('build'));

// register routes
app.use('/api/colours', coloursRouter);
app.use('/api/palette', paletteRouter);

app.listen(PORT, function () {
  console.log('Listening on port, ', PORT);
});
