const asyncHandler = require('express-async-handler');

// @desc    Get expenses
// @route   GET api/expenses
// @access  Private
const getExpenses = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get expenses' });
});

// @desc    Add expense
// @route   POST api/expenses
// @access  Private
const addExpense = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.value) {
    res.status(400);
    throw new Error('Please add the required data');
  }

  res.status(200).json({ message: 'Add expense' });
});

module.exports = {
  getExpenses,
  addExpense,
};
