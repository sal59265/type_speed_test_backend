const { Script } = require('../models');

const getScriptById = async (req, res) => {
  try {
    const { id } = req.params;
    const script = await Script.findByPk(id);
    if (script) {
      return res.status(200).json({ script });
    }
    return res.status(404).send('This script does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getScriptById
};
