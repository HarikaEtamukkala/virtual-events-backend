import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';


import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import participantRoutes from './routes/participantRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Events API');
});

app.use(authRoutes);
app.use(eventRoutes);
app.use(participantRoutes);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});