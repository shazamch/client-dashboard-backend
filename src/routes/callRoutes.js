const express = require('express');
const router = express.Router();
const callController = require('../controllers/callContoller');
const validate = require('../middlewares/validate');
const callValidation = require('../validations/callValidation');

// POST new call
router.post('/', validate(callValidation.createCall), callController.createCall);

// GET all calls
router.get('/', callController.getAllCalls);
router.get('/inbound', callController.getInboundCalls);
router.get('/outbound', callController.getOutboundCalls);
router.get('/count', callController.getTotalCallsCount);
router.get('/avg-duration', callController.getAverageCallDuration);

router.get('/agent/:agent', validate(callValidation.getCallsByAgent), callController.getCallsByAgent);

router.get('/avg-duration/:agent', validate(callValidation.getAverageDurationByAgent), callController.getAverageDurationByAgent);

module.exports = router;
