"use client";

// Import React hook form components
import { useForm, Controller } from "react-hook-form";
import { yupFormValidator } from "@/lib/validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { FileUploader } from "./FileUploader";
import DatePicker from "react-datepicker";
import { createEvent, updateEvent } from "@/lib/actions/event.action";
// CSS
import "react-datepicker/dist/react-datepicker.css";
import { useUploadThing } from "@/lib/uploadthing";
import { useState } from "react";
import { useRouter } from "next/navigation";

const eventCategories = ["Party", "Concert", "Career", "Business"];

type EventFormProps = {
  userId?: string | any;
  type?: "Create" | "update";
  eventId?: string | any;
  event?: any;
};

const EventForm = ({ userId, type, eventId }: EventFormProps) => {
  const [files, setFiles] = useState<any>();

  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(yupFormValidator),
  });

  // Upload Thing
  const { startUpload } = useUploadThing("imageUploader");

  // send to api
  const sendRequestToApi = async (formValue: any) => {
    // get the Image URL
    let uploadUrl = formValue.imageUrl;
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadUrl = uploadedImages[0].url;
    }

    try {
      // Create Event
      if (type == "Create") {
        const newEvent = await createEvent({
          event: { ...formValue, imageUrl: uploadUrl },
          userId,
          path: "/profile",
        });

        if (newEvent) {
          reset();
          router.push(`/events/${newEvent._id}`);
        }
      }

      // update Event
      if (type == "update") {
        if (!eventId) {
          router.back();
          return;
        }

        const updatedEvent = await updateEvent({
          userId,
          event: { ...formValue, imageUrl: uploadUrl, _id: eventId },
          path: `/events/${eventId}`,
        });

        if (updatedEvent) {
          reset();
          router.push(`/events/${updatedEvent._id}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(sendRequestToApi)}>
      {/* Form Input EVENT TITLE */}
      <div className="flex flex-col gap-3 font-body ">
        <label htmlFor="event Title" className="text-violet-50 font-light">
          Event Title
        </label>
        <input
          type="text"
          {...register("title")}
          className="bg-violet-500/10 p-4 text-violet-50 font-light rounded-md"
        />
        <p className="font-light text-red-400">{errors.title?.message}</p>
      </div>
      {/* Event Description */}
      <div className="flex flex-col gap-3 font-body ">
        <label htmlFor="event Title" className="text-violet-50 font-light">
          Event Description
        </label>
        <textarea
          {...register("description")}
          className="bg-violet-500/10 p-4 text-violet-50 font-light rounded-md resize-none"
        />
        <p className="font-light text-red-400">{errors.description?.message}</p>
      </div>
      {/* Form Input EVENT LOCATION */}
      <div className="flex flex-col gap-3 font-body ">
        <label htmlFor="event location" className="text-violet-50 font-light">
          Location
        </label>
        <input
          type="text"
          {...register("location")}
          className="bg-violet-500/10 p-4 text-violet-50 font-light rounded-md"
        />
        <p className="font-light text-red-400">{errors.location?.message}</p>
      </div>
      {/* Form Input EVENT CATEGORY */}
      <div className="flex flex-col gap-3 font-body ">
        <label htmlFor="category" className="text-violet-50 font-light">
          Event Category
        </label>
        <select
          {...register("category")}
          className="bg-violet-500/10 p-4 text-violet-50 font-light rounded-md"
        >
          {eventCategories.map((category) => (
            <option key={category}>{category}</option>
          ))}
          <p className="font-light text-red-400">{errors.category?.message}</p>
        </select>
      </div>
      {/* File Upload */}
      <div className="space-y-3">
        <label
          htmlFor="category"
          className="text-violet-50 font-light font-body"
        >
          Event Cover Art
        </label>
        <Controller
          control={control}
          name="imageUrl"
          render={({ field }) => (
            <FileUploader
              changeFiles={setFiles}
              onChange={field.onChange}
              imageUrl={field.value}
            />
          )}
        />
      </div>
      {/* Dates */}
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="flex flex-col gap-3 text-violet-50 font-body font-light w-full">
          <label htmlFor="start date">Start Date</label>
          <Controller
            control={control}
            name="startDateTime"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date: Date) => field.onChange(date)}
                className="bg-violet-500/10 p-4 rounded-md w-full"
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3 text-violet-50 font-body font-light w-full">
          <label htmlFor="end Date">End Date</label>
          <Controller
            control={control}
            name="endDateTime"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date: Date) => field.onChange(date)}
                className="bg-violet-500/10 p-4 rounded-md w-full"
              />
            )}
          />
        </div>
      </div>
      {/* is Free ? */}
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="price" className="font-body font-light text-violet-50">
          Price
        </label>
        <input
          type="number"
          {...register("price")}
          className="p-4 bg-violet-500/10 focus-visible:outline-none text-violet-50 font-body font-light"
        />
      </div>
      <div className="flex  items-center">
        <label
          htmlFor="is free"
          className="font-body font-light text-violet-50"
        >
          Free Ticket
        </label>
        <input
          type="checkbox"
          {...register("isFree")}
          className="border-2 border-violet-200"
        />
      </div>
      {/* submit button */}
      <button
        disabled={isSubmitting}
        className="font-head font-bold bg-violet-800 py-2 px-6 text-white rounded w-full md:w-fit"
      >
        {isSubmitting ? `${type}ing Event` : `Submit`}
      </button>
    </form>
  );
};

export default EventForm;
