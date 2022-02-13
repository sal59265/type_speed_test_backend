const AppRouter = require('express').Router();
const UserRouter = require('./UserRouter');
const ScriptRouter = require('./ScriptRouter');
const LeaderBoardRouter = require('./LeaderBoardRouter');
AppRouter.use('/users', UserRouter);
AppRouter.use('/scripts', ScriptRouter);
AppRouter.use('/leaderboards', LeaderBoardRouter);
module.exports = AppRouter;
