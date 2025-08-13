import { EventController } from "../controllers/eventController.js";   
import { Router } from "express";
import authenticate from "../middleware/auth.js";
const eventRoutes = Router();

eventRoutes.post('/events', authenticate,EventController.createEvent);
eventRoutes.get('/events', EventController.getEvents);
eventRoutes.get('/events/:id', EventController.getEventById);
eventRoutes.put('/events/:id', EventController.updateEvent);
eventRoutes.delete('/events/:id', EventController.deleteEvent); 

export default eventRoutes;