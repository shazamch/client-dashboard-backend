const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Inbound', 'Outbound'],
    required: true,
  },
  patient: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  agent: {
    type: String,
    required: true,
  },
  purpose: {
    type: String, // optional for inbound calls
  },
  summary: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in seconds (recommended for easier KPI calculation)
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Call', callSchema);
