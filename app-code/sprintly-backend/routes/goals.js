const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goal.controller');

router.post('/', goalController.createGoal);
router.get('/sprint/:sprintId', goalController.getGoalsBySprint);
router.patch('/:id/status', goalController.updateGoalStatus);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;
