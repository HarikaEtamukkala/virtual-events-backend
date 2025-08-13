import {EventModel} from '../models/eventModel.js';

export const EventController = {
    async createEvent(req, res) {
        const { title, description, date, time, location } = req.body;  
        if (!title || !description || !date || !time || !location) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const eventData = { title, description, date, time, location, createdBy: req.user.id };
        const newEvent = await EventModel.createEvent(eventData);
        return res.status(201).json({ message: "Event created successfully", event: newEvent });
    },  
    async getEvents(req, res) {
        const events = await EventModel.getAllEvents();
        return res.status(200).json({ message: "Events retrieved successfully", events });
    },
    async getEventById(req, res) {
        const { id } = req.params;
        console.log(`Fetching event with ID: ${id}`);
        console.log('EventModel:', EventModel);
        const event = await EventModel.getEventById(id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        return res.status(200).json({ message: "Event retrieved successfully", event });
    },
    async updateEvent(req, res) {
        const { id } = req.params;
        const { title, description, date, time, location } = req.body;
        
        const updatedEvent = await EventModel.updateEvent(id, { title, description, date, time, location });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }    
        return res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
    },
    async deleteEvent(req, res) {
        const { id } = req.params;
        const deletedEvent = await EventModel.deleteEvent(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        return res.status(200).json({ message: "Event deleted successfully" });
    }

};       