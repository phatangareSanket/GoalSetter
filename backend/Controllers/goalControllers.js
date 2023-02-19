// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
};

// @desc    Create Goals
// @route   POST /api/goals
// @access  Private
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add Text Field');
  }
  console.log(req.body)
  res.status(200).json({
    message: "Create Goals",
  });
};

// @desc    Update Goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
};

// @desc    Delete Goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
