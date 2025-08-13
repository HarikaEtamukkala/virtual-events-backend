import { ParticipantController } from "../controllers/participantController.js";

import { Router } from "express";
import authenticate from "../middleware/auth.js";   

const participantRoutes = Router();

participantRoutes.post('/events/:eventId/participants', authenticate, ParticipantController.registerForEvent);
participantRoutes.get('/events/:eventId/participants', authenticate, ParticipantController.getParticipants);    

export default participantRoutes;
