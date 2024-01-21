"use server";

import User from "@/database/user.mode";
import { connectDb } from "../connectDb";
import { revalidatePath } from "next/cache";
import Event from "@/database/event.model";

// Populate Events
const populateEvent = (query: any) => {
  return query.populate({
    path: "organizer",
    model: User,
    select: "_id firstName lastName",
  });
};

// CREATE
export async function createEvent({ userId, event, path }: any) {
  try {
    await connectDb();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.log(error);
  }
}

//UPDATE
export async function updateEvent({ userId, event, path }: any) {
  try {
    await connectDb();

    const eventToUpdate = await Event.findById(event._id);
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error("Unauthorized or event not found");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      event._id,
      { ...event, category: event.categoryId },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedEvent));
  } catch (error) {
    console.log(error);
  }
}

// Fetch All Events
export async function getAllEvents() {
  try {
    await connectDb();

    const events = await populateEvent(Event.find());

    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.log(error);
  }
}

// Fetch Single Event
export async function getEventById(eventId: string) {
  try {
    await connectDb();

    const event = await populateEvent(Event.findById(eventId));

    if (!event) throw new Error("Event not found");

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    console.log(error);
  }
}

// Delete Event
export async function deleteEvent({ eventId, path }: any) {
  try {
    await connectDb();

    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (deletedEvent) revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
