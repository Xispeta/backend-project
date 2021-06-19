const Subbred = require("./subbreed.model");

const getMany = async (req, res) => {
  try {
    const docs = await Subbred.find().populate("breed").lean().exec();;
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const createOne = async (req, res) => {67
  try {
    const doc = await Subbred.create({
      breed: req.params.breed,
      ...req.body,
    });
    res.status(201).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeOne = async (req, res) => {
  try {
    const doc = await Subbred.findOneAndRemove({ _id: req.params.subbreed })
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(400)
        .json({ error: `Subbreed with ID ${req.params.subbreed} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeAll = async (req, res) => {
  try {
    const doc = await Subbred.deleteMany().lean().exec();
    if (!doc) {
      return res
        .status(400)
        .json({ error: `Subbreed with ID ${req.params.subbreed} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

module.exports = {
  getMany,
  createOne,
  removeOne,
  removeAll,
};
