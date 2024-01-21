import { formatDateTime, formatPrice } from "@/lib/utilis";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const EventsCard = ({ event }: any) => {
  return (
    <div key={event._id} className="shadow-md bg-slate-800 rounded-lg">
      {/* image */}
      <div className="h-[300px] object-center">
        <img src={event.imageUrl} alt={event.title} className="h-full w-full" />
      </div>
      {/* info */}
      <div className="text-violet-50 p-3 space-y-6">
        {/* event Time And Location */}
        <div className="flex gap-4">
          <div className="text-violet-50 font-body font-light">
            <p className="md:text-base">
              {formatDateTime(event.startDateTime).dateOnly} -{" "}
              {formatDateTime(event.startDateTime).timeOnly}
            </p>
          </div>
        </div>
        {/* free or paid */}
        <div>
          <span className="font-head bg-green-200 text-green-700 font-bold px-6 py-1 inline-block rounded-full uppercase text-base">
            {event.isFree ? "Free" : formatPrice(event.price)}
          </span>
        </div>
        <h2 className="font-head font-bold capitalize text-xl">
          {event.title}
        </h2>
        {/* event Organizers */}
        <div className="capitalize font-body font-light">
          by {event.organizer.firstName} | {event.organizer.lastName}
        </div>
        {/* See More Info */}
        <Link
          href={`/events/${event._id}`}
          className="flex font-body font-light items-center"
        >
          More Info <ChevronRight strokeWidth={1} size={20} />
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
