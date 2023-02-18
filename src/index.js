const express = require('express');

require('express-async-errors');

const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(routes);
// Error Handler -> Sempre depois da definição de Rotas.
app.use((error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
