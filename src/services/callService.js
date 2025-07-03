const Call = require('../models/callModel');

// Add new call
const createCall = async (callData) => {
  return await Call.create(callData);
};

// Fetch all calls
const getAllCalls = async () => {
  return await Call.find().sort({ createdAt: -1 });
};

// Fetch inbound calls
const getInboundCalls = async () => {
  return await Call.find({ type: 'Inbound' }).sort({ createdAt: -1 });
};

// Fetch outbound calls
const getOutboundCalls = async () => {
  return await Call.find({ type: 'Outbound' }).sort({ createdAt: -1 });
};

// Total calls count
const getTotalCallsCount = async () => {
  return await Call.countDocuments();
};

// Average call duration
const getAverageCallDuration = async () => {
  const result = await Call.aggregate([
    { $group: { _id: null, avgDuration: { $avg: "$duration" } } }
  ]);
  return result[0]?.avgDuration || 0;
};

// Total calls by agent
const getCallsByAgent = async (agentName) => {
  return await Call.find({ agent: agentName }).sort({ createdAt: -1 });
};

// Average call duration by agent
const getAverageDurationByAgent = async (agentName) => {
  const result = await Call.aggregate([
    { $match: { agent: agentName } },
    { $group: { _id: null, avgDuration: { $avg: "$duration" } } }
  ]);
  return result[0]?.avgDuration || 0;
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
