const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing or incomplete
    console.error('Error:', error);
    res.status(500).send('Something went wrong');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));