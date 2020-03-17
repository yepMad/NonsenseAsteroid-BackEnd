import { Router } from 'express';
import cors from 'cors';

import ScoreboardController from './app/controllers/ScoreboardController';

const routes = new Router();

routes.get(cors);

routes.get('/scoreboard', ScoreboardController.index);
routes.post('/scoreboard', ScoreboardController.update);

export default routes;
