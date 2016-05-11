const express = require('express');
const PORT = process.env.PORT || 5000;

express().use(express.static(__dirname + '/build')).listen(PORT, () => {
  console.log('server up on port: ' + PORT);
});
