const express = require('express');

const { resolve, dirname } = require('path');

const app = express();

app.use('/', express.static(
	resolve(
		__dirname,
		'./build'
	)
))

app
	.listen(process.env.PORT || 3000, (err) => {
	if (err) { return console.log(err) }
	console.log('working.')
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}