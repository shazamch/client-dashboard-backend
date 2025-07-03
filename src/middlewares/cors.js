const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  "https://patient-communication-platform.vercel.app/",
  "https://patient-communication-platform.vercel.app"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  exposedHeaders: 'Authorization',
};

module.exports = cors(corsOptions);
