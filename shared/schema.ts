import { pgTable, text, serial, integer, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const exhibitions = pgTable("exhibitions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  artistId: integer("artist_id").notNull(),
});

export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url").notNull(),
  origin: text("origin").notNull(),
  artworks: json("artworks").notNull().$type<string[]>(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: timestamp("date").notNull(),
  capacity: integer("capacity").notNull(),
  registrations: integer("registrations").default(0),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  language: text("language").default("en"),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  attendees: integer("attendees").notNull(),
});

export const insertExhibitionSchema = createInsertSchema(exhibitions).omit({ id: true });
export const insertArtistSchema = createInsertSchema(artists).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true, registrations: true });
export const insertSubscriberSchema = createInsertSchema(subscribers).omit({ id: true });
export const insertBookingSchema = createInsertSchema(bookings).omit({ id: true });

export type Exhibition = typeof exhibitions.$inferSelect;
export type Artist = typeof artists.$inferSelect;
export type Event = typeof events.$inferSelect;
export type Subscriber = typeof subscribers.$inferSelect;
export type Booking = typeof bookings.$inferSelect;

export type InsertExhibition = z.infer<typeof insertExhibitionSchema>;
export type InsertArtist = z.infer<typeof insertArtistSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
