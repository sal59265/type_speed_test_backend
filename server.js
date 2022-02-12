const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/AppRouter');

console.log(process.env.PORT);
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

app.listen(PORT, () => {
  console.log(`Server Started On Port: ${PORT}`);
});
