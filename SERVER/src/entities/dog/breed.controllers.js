const Breed = require("./breed.model");

const getMany = async (req, res) => {
  try {
    const docs = await Breed.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const createOne = async (req, res) => {
  try {
    const doc = await Breed.create({ ...req.body });
    res.status(201).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const getOne = async (req, res) => {
  try {
    const doc = await Breed.findOne({ _id: req.params.breed }).lean().exec();
    if (!doc) {
      return res
        .status(400)
        .json({ error: `Breed with ID ${req.params.breed} not found` });
    }
    res.status(201).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const updateOne = async (req, res) => {
  try {
    const doc = await Breed.findOneAndUpdate(
      { _id: req.params.breed },
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(400)
        .json({ error: `Breed with ID ${req.params.breed} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeOne = async (req, res) => {
  try {
    const doc = await Breed.findOneAndRemove({ _id: req.params.breed })
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(400)
        .json({ error: `Breed with ID ${req.params.breed} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeAll = async (req, res) => {
  try {
    const doc = await Breed.deleteMany().lean().exec();
    if (!doc) {
      return res
        .status(400)
        .json({ error: `Breed with ID ${req.params.breed} not found` });
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
  getOne,
  updateOne,
  removeOne,
  removeAll,
};
