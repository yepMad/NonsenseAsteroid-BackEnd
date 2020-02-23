import Scoreboard from '../schemas/Scoreboard';

class ScoreboardController {
  async index(req, res) {
    const scores = await Scoreboard.find()
      .sort({ createdAt: 'desc' })
      .limit(10);

    return res.json(scores);
  }

  async update(req, res) {
    const checkUserExists = await Scoreboard.find(
      {
        token: req.body.userToken,
      },
      null,
      { limit: 1 }
    );

    if (checkUserExists.length === 0) {
      await Scoreboard.create({
        token: req.body.userToken,
        name: req.body.name,
        score: req.body.score,
      });
    } else {
      await Scoreboard.findOneAndUpdate(req.score, {
        score: req.body.score,
      });
    }

    const scores = await Scoreboard.find()
      .sort({ score: 'desc' })
      .limit(10);

    return res.json(scores);
  }
}

export default new ScoreboardController();
