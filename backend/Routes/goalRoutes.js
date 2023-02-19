const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../Controllers/goalControllers");
const router = express.Router();

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router;
