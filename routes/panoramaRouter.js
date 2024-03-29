const express = require('express');
const planRouter = express.Router();
const {getPlan, getPlanById, createPlan, editPlan, deletePlan} = require('../controllers/planController');

planRouter.route('/panoramas').get(getPlan);
planRouter.route('/crearpanorama').post(createPlan);
planRouter.route('/panoramas/:id').delete(deletePlan);

module.exports = planRouter;