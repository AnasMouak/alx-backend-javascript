const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for GET /cart/:id
app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  
  if (isNaN(id)) {
    return res.status(404).send('Not Found');
  }

  res.send(`Payment methods for cart ${id}`);
});

// Only start the server if this script is run directly, not when required in tests
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
  });
}

module.exports = app;
