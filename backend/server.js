import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { requireAuth } from '@clerk/express';
import categorySeeder from './routes/categorySeeder.js';
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(' Welcome to WheelsUp API');
});
app.get('/api/protected', requireAuth(), (req, res) => {
    res.json({ userId: req.auth.userId });
});


app.use('/api/seed', categorySeeder);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
