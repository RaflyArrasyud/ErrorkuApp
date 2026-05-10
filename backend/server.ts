import express from 'express';
import errorRoutes from './routes/errorRoutes';

const app = express();
const PORT = parseInt(process.env.PORT || '3000');

app.use(express.json());

// API Routes
app.use('/api/errors', errorRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Errorku Backend' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on port ${PORT}`);
});
