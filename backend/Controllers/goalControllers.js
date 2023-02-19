const asyncHandler = require("express-async-handler");
const Goal = require("../Models/goalModel");

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  var goals = await Goal.find();
  if (!goals) {
    res.status(400);
    throw new Error("No Goals Found");
  }
  res.status(200).send(goals);
});

// @desc    Create Goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add Text Field");
  }
  const newGoal = new Goal(req.body);
  Goal.create(newGoal).then((goal) => {
    res.status(200).send(goal);
  });
});

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  const deleteGoal = await Goal.findByIdAndDelete(req.params.id)
    .then((goal) => {
      res.status(200).send(goal);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
