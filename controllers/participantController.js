import { get } from "http";

const participants= [];
export const ParticipantController ={
    async registerForEvent(req, res) {
        const { eventId } = req.params;
        const userId  = req.user.id;
        console.log('req.user:', req.user);
        console.log(`User ID: ${userId}, Event ID: ${eventId}`);
        if (!eventId) {
            return res.status(400).json({ message: "Event ID is required" });
        }

        const participantData = { eventId, userId };
        participants.push(participantData);
        
        return res.status(201).json({ message: "Registered for event successfully", participant: participantData });
    },
    async getParticipants(req, res) {
        const { eventId } = req.params;
        if (!eventId) {
            return res.status(400).json({ message: "Event ID is required" });
        }       
        const eventParticipants = participants.filter(participant => participant.eventId === eventId);
        if (eventParticipants.length === 0) {
            return res.status(404).json({ message: "No participants found for this event" });
        }
        return res.status(200).json({ message: "Participants retrieved successfully", participants: eventParticipants });
    }
}