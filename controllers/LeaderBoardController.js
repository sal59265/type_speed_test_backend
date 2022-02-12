const { LeaderBoard } = require('../models');

const getAllLeaderBoard = async (req, res) => {
  try {
    const leaderboards = await LeaderBoard.findAll();
    return res.status(200).json({ leaderboards });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLeaderBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    const leaderboard = await LeaderBoard.findByPk(id);
    if (leaderboard) {
      return res.status(200).json({ leaderboard });
    }
    return res.status(404).send('This script does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllLeaderBoard,
  getLeaderBoardById
};
