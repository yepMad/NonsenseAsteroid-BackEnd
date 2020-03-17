"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _ScoreboardController = require('./app/controllers/ScoreboardController'); var _ScoreboardController2 = _interopRequireDefault(_ScoreboardController);

const routes = new (0, _express.Router)();

routes.get(_cors2.default);

routes.get('/scoreboard', _ScoreboardController2.default.index);
routes.post('/scoreboard', _ScoreboardController2.default.update);

exports. default = routes;
