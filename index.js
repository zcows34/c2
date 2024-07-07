const express = require('express');
const app = express();
const { exec } = require('child_process');

app.use(express.static('public'));

app.get('/', (req, res) => {
  exec(`./cowsay ${req.req.query.id}`, {timeout: 5000}, (error, stdout) => {
    if (error) return res.status(500).end();
    res.type('txt').send(stdout).end();
  });
});

app.listen(80, () => {
  console.log('listening');
});
