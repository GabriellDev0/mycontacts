const express = require('express');

require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors);
app.use(routes);
// Error Handler -> Sempre depois da definição de Rotas.
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));
