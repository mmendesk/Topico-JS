
import { Router } from 'express';
import movieRoutes from './movie.route';

const routes = Router();

routes.use('/movie', movieRoutes);

export default routes;