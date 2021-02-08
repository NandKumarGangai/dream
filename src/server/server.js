const path = require('path');
const cors = require('cors');
const express = require('express');

const PORT = 8000;

const runServer = app => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static('build'));
  
  app.get('/test', (req, res) => {
    return res.send('pong')
  });

  app.post('/test', (req, res) => {
    console.log('body: ', req.body);
    return res.status(200).json({
      success: true,
      data: req.body
    })
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })

  app.listen(PORT, () => console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV} mode ....`));
}

module.exports = {
  runServer
}