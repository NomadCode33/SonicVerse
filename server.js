// All this code is ES Modules since I changed the type from 'commonjs' to 'module'
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

// Import routes
//import homeRoutes from './routes/home.js';
//import dashboardRoutes from './routes/dashboard.js';
import sonicHubRoutes from './routes/sonicHub.js';
import apiRoutes from './routes/api.js';

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.use(cors());
//app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'react-frontend/dist')));
//app.use(logger('dev'));

// The root route, the home page
/*app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});*/

app.use('/api', apiRoutes);

app.get(/.*/, (req, res) => {
  res.sendFile(
    path.join(__dirname, 'react-frontend/dist/index.html')
  );
});

// Using the different routes for home, dashboard, etc.
//app.use('/home', homeRoutes);
//app.use('/dashboard', dashboardRoutes);
//app.use('/sonic-hub', sonicHubRoutes);

const PORT = process.env.PORT || 8000; // ← added this

// This listens for the PORT of the server we host it on
// If that PORT doesn't exist, then we use the PORT that we set prior
app.listen(PORT, () => {
    console.log(`Server is running! You better catch it on port ${PORT}!`)
});