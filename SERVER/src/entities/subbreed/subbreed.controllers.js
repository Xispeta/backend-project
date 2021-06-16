const Subbredd = require("./subbreed.model");

const getMany = async (req, res) => {
  try {
    const docs = await Subbredd.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const createOne = async (req, res) => {
  try {
    const doc = await Subbredd.create(req.body);
    res.status(201).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

module.exports = {
  getMany,
  createOne,
};
