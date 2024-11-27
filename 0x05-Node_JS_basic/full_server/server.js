import express from 'express';
import mapRoutes from './routes';

const PORT = 1245;
const app = express();
mapRoutes(app);
app.listen(PORT);

export default app;
