import {
  Exhibition, InsertExhibition,
  Artist, InsertArtist,
  Event, InsertEvent,
  Subscriber, InsertSubscriber,
  Booking, InsertBooking
} from "@shared/schema";

export interface IStorage {
  // Exhibitions
  getExhibitions(): Promise<Exhibition[]>;
  getExhibition(id: number): Promise<Exhibition | undefined>;
  createExhibition(exhibition: InsertExhibition): Promise<Exhibition>;

  // Artists
  getArtists(): Promise<Artist[]>;
  getArtist(id: number): Promise<Artist | undefined>;
  createArtist(artist: InsertArtist): Promise<Artist>;

  // Events
  getEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEventRegistrations(id: number, count: number): Promise<Event>;

  // Subscribers
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;

  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingsForEvent(eventId: number): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private exhibitions: Map<number, Exhibition>;
  private artists: Map<number, Artist>;
  private events: Map<number, Event>;
  private subscribers: Map<number, Subscriber>;
  private bookings: Map<number, Booking>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.exhibitions = new Map();
    this.artists = new Map();
    this.events = new Map();
    this.subscribers = new Map();
    this.bookings = new Map();
    this.currentIds = {
      exhibitions: 1,
      artists: 1,
      events: 1,
      subscribers: 1,
      bookings: 1
    };
  }

  async getExhibitions(): Promise<Exhibition[]> {
    return Array.from(this.exhibitions.values());
  }

  async getExhibition(id: number): Promise<Exhibition | undefined> {
    return this.exhibitions.get(id);
  }

  async createExhibition(exhibition: InsertExhibition): Promise<Exhibition> {
    const id = this.currentIds.exhibitions++;
    const newExhibition = { ...exhibition, id };
    this.exhibitions.set(id, newExhibition);
    return newExhibition;
  }

  async getArtists(): Promise<Artist[]> {
    return Array.from(this.artists.values());
  }

  async getArtist(id: number): Promise<Artist | undefined> {
    return this.artists.get(id);
  }

  async createArtist(artist: InsertArtist): Promise<Artist> {
    const id = this.currentIds.artists++;
    const newArtist = { ...artist, id };
    this.artists.set(id, newArtist);
    return newArtist;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = this.currentIds.events++;
    const newEvent = { ...event, id, registrations: 0 };
    this.events.set(id, newEvent);
    return newEvent;
  }

  async updateEventRegistrations(id: number, count: number): Promise<Event> {
    const event = await this.getEvent(id);
    if (!event) throw new Error("Event not found");
    
    const updatedEvent = { ...event, registrations: event.registrations + count };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentIds.subscribers++;
    const newSubscriber = { ...subscriber, id };
    this.subscribers.set(id, newSubscriber);
    return newSubscriber;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentIds.bookings++;
    const newBooking = { ...booking, id };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async getBookingsForEvent(eventId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(b => b.eventId === eventId);
  }
}

export const storage = new MemStorage();
