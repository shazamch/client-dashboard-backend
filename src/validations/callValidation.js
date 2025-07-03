const Joi = require('joi');
const { objectId } = require('./custom.validation'); // if needed for agent ids etc

// Create Call validation
const createCall = {
  body: Joi.object().keys({
    type: Joi.string().valid('Inbound', 'Outbound').required(),
    patient: Joi.object({
      name: Joi.string().required(),
      phone: Joi.string().required(),
    }).required(),
    agent: Joi.string().required(),
    purpose: Joi.string().allow("", null).optional(),
    summary: Joi.string().required(),
    duration: Joi.number().positive().required(),
  }),
};

// No body validations needed for GET routes, but for params-based routes:
const getCallsByAgent = {
  params: Joi.object().keys({
    agent: Joi.string().required(),
  }),
};

const getAverageDurationByAgent = {
  params: Joi.object().keys({
    agent: Joi.string().required(),
  }),
};

module.exports = {
  createCall,
  getCallsByAgent,
  getAverageDurationByAgent,
};
