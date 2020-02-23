import { Router } from 'express';

import ScoreboardController from './app/controllers/ScoreboardController';

const routes = new Router();

routes.get('/scoreboard', ScoreboardController.index);
routes.post('/scoreboard', ScoreboardController.update);

export default routes;
