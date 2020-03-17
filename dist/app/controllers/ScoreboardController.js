"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Scoreboard = require('../schemas/Scoreboard'); var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

class ScoreboardController {
  async index(req, res) {
    const scores = await _Scoreboard2.default.find()
      .sort({ score: 'desc' })
      .limit(10)
      .select('name score');

    return res.json(scores);
  }

  async update(req, res) {
    const { token, name, score } = req.body;

    const checkUserExists = await _Scoreboard2.default.find({ token }, { limit: 1 });

    if (checkUserExists.length === 0) {
      await _Scoreboard2.default.create({ token, name, score });
    } else {
      await _Scoreboard2.default.findOneAndUpdate({ token }, { score });
    }

    const scores = await _Scoreboard2.default.find()
      .sort({ score: 'desc' })
      .limit(10)
      .select('name score');

    return res.json(scores);
  }
}

exports. default = new ScoreboardController();
