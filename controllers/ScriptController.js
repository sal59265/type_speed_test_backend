const { Script } = require('../models');

const getAllScript = async (req, res) => {
  try {
    const scripts = await Script.findAll();
    return res.status(200).json({ scripts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

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

const updateScript = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    const updatedScript = await Script.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(updatedScript);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getScriptById,
  getAllScript,
  updateScript
};
