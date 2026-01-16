// routes/sonicHub.js
// When doing the request it goes to the router to route to specific controller
import express from 'express';


/*import path from 'path';
import { fileURLToPath } from 'url';*/

const router = express.Router();

/*// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);*/

// The root route for sonicHub
router.get('/', (request, response) => {
    response.render('index.html');
})

// Make a controller for the sonichub route

export default router;