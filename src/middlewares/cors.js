const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  "https://client-dashboard-beige.vercel.app/",
  "https://client-dashboard-p0nu7cv71-shazamchs-projects.vercel.app/"
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
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
  credentials: true,
  exposedHeaders: 'Authorization',
};

module.exports = cors(corsOptions);
