const { Router } = require('express');
const controller = require('../controllers/ScriptController');
const router = Router();

router.get('/:id', controller.getScriptById);

module.exports = router;
