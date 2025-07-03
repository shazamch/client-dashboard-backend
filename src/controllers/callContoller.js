const callService = require('../services/callService');

// Add new call
const createCall = async (req, res) => {
  try {
    const call = await callService.createCall(req.body);
    res.status(201).json({
      code: 201,
      success: true,
      message: 'Call created successfully',
      data: call,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Failed to create call',
      data: { error: err.message },
    });
  }
};

// Get all calls
const getAllCalls = async (req, res) => {
  try {
    const calls = await callService.getAllCalls();
    res.json({
      code: 200,
      success: true,
      message: 'All calls fetched successfully',
      data: calls,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Failed to fetch calls',
      data: { error: err.message },
    });
  }
};

// Get inbound calls
const getInboundCalls = async (req, res) => {
  try {
    const calls = await callService.getInboundCalls();
    res.json({
      code: 200,
      success: true,
      message: 'Inbound calls fetched successfully',
      data: calls,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Failed to fetch inbound calls',
      data: { error: err.message },
    });
  }
};

// Get outbound calls
const getOutboundCalls = async (req, res) => {
  try {
    const calls = await callService.getOutboundCalls();
    res.json({
      code: 200,
      success: true,
      message: 'Outbound calls fetched successfully',
      data: calls,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Failed to fetch outbound calls',
      data: { error: err.message },
    });
  }
};

// Get total call count
const getTotalCallsCount = async (req, res) => {
  try {
    const count = await callService.getTotalCallsCount();
    res.json({
      code: 200,
      success: true,
      message: 'Total calls count fetched successfully',
      data: { totalCalls: count },
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Failed to fetch total calls count',
      data: { error: err.message },
    });
  }
};

// Get average call duration
const getAverageCallDuration = async (req, res) => {
  try {
    const avgDuration = await callService.getAverageCallDuration();
    res.json({
      code: 200,
      success: true,
      message: 'Average call duration fetched successfully',
      data: { avgDuration },
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Failed to fetch average call duration',
      data: { error: err.message },
    });
  }
};

// Get calls by agent
const getCallsByAgent = async (req, res) => {
  try {
    const agentName = req.params.agent;
    const calls = await callService.getCallsByAgent(agentName);
    res.json({
      code: 200,
      success: true,
      message: `Calls fetched successfully for agent: ${agentName}`,
      data: calls,
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: `Failed to fetch calls for agent: ${req.params.agent}`,
      data: { error: err.message },
    });
  }
};

// Get average call duration by agent
const getAverageDurationByAgent = async (req, res) => {
  try {
    const agentName = req.params.agent;
    const avgDuration = await callService.getAverageDurationByAgent(agentName);
    res.json({
      code: 200,
      success: true,
      message: `Average call duration fetched successfully for agent: ${agentName}`,
      data: { agent: agentName, avgDuration },
    });
  } catch (err) {
    res.status(500).json({
      code: 500,
      success: false,
      message: `Failed to fetch average call duration for agent: ${req.params.agent}`,
      data: { error: err.message },
    });
  }
};

module.exports = {
  createCall,
  getAllCalls,
  getInboundCalls,
  getOutboundCalls,
  getTotalCallsCount,
  getAverageCallDuration,
  getCallsByAgent,
  getAverageDurationByAgent,
};
