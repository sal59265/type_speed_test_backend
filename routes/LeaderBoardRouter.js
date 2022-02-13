const { Router } = require('express');
const controller = require('../controllers/LeaderBoardController');
const router = Router();

router.get('/', controller.getAllLeaderBoard);
router.get('/:id', controller.getLeaderBoardById);

module.exports = router;
