import express from 'express';
import 'express-async-errors';
import './src/database';

import cors from './src/app/middlewares/cors';
import errorHandler from './src/app/middlewares/errorHandler';
import routes from './src/routes/index.routes';

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
