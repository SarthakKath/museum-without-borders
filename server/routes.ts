import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { 
  insertExhibitionSchema, 
  insertArtistSchema,
  insertEventSchema,
  insertSubscriberSchema,
  insertBookingSchema
} from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Exhibitions
  app.get("/api/exhibitions", async (_req, res) => {
    const exhibitions = await storage.getExhibitions();
    res.json(exhibitions);
  });

  app.get("/api/exhibitions/:id", async (req, res) => {
    const exhibition = await storage.getExhibition(Number(req.params.id));
    if (!exhibition) return res.status(404).json({ message: "Exhibition not found" });
    res.json(exhibition);
  });

  // Artists
  app.get("/api/artists", async (_req, res) => {
    const artists = await storage.getArtists();
    res.json(artists);
  });

  app.get("/api/artists/:id", async (req, res) => {
    const artist = await storage.getArtist(Number(req.params.id));
    if (!artist) return res.status(404).json({ message: "Artist not found" });
    res.json(artist);
  });

  // Events
  app.get("/api/events", async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get("/api/events/:id", async (req, res) => {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  });

  // Bookings
  app.post("/api/events/:id/book", async (req, res) => {
    const event = await storage.getEvent(Number(req.params.id));
    if (!event) return res.status(404).json({ message: "Event not found" });
    
    try {
      const booking = insertBookingSchema.parse(req.body);
      if (event.registrations + booking.attendees > event.capacity) {
        return res.status(400).json({ message: "Event is at capacity" });
      }
      
      await storage.createBooking(booking);
      await storage.updateEventRegistrations(event.id, booking.attendees);
      res.json({ message: "Booking successful" });
    } catch (error) {
      res.status(400).json({ message: "Invalid booking data" });
    }
  });

  // Newsletter
  app.post("/api/subscribe", async (req, res) => {
    try {
      const subscriber = insertSubscriberSchema.parse(req.body);
      await storage.createSubscriber(subscriber);
      res.json({ message: "Subscription successful" });
    } catch (error) {
      res.status(400).json({ message: "Invalid subscription data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
