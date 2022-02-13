const { Router } = require('express');
const controller = require('../controllers/ScriptController');
const router = Router();

router.get('/:id', controller.getScriptById);
router.get('/', controller.getAllScript);
router.put('/:id', controller.updateScript);

module.exports = router;
