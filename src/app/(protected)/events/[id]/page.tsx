import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getEventById } from "@/lib/actions/event.action";
import { formatDateTime, formatPrice } from "@/lib/utilis";
import Image from "next/image";
import Link from "next/link";

const SingleEvent = async ({ params }: any) => {
  const event = await getEventById(params.id);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* container */}
      <main className=" md:w-[75%] mx-auto min-h-screen">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
          {/* image container */}
          <Image
            src={event.imageUrl}
            width={1000}
            height={1000}
            alt={event.title}
            className="object-cover object-center h-full  min-h-[300px"
          />
          {/* About Event container */}
          <div className="space-y-6">
            {/* Event Title */}
            <h1 className="font-head font-bold text-4xl text-violet-50 capitalize">
              {event.title}
            </h1>
            {/* Event is free or Price and Category */}
            <div>
              <span className="font-head bg-green-200 text-green-700 font-bold px-6 py-1 inline-block rounded-full uppercase text-xl">
                {event.isFree ? "Free" : formatPrice(event.price)}
              </span>
            </div>
            {/* event Time And Location */}
            <div className="flex gap-4">
              <Image
                src="/assets/icons/calendar.svg"
                alt="calendar"
                width={32}
                height={32}
              />
              <div className="text-violet-50 font-body font-light">
                <p className="md:text-xl">
                  {formatDateTime(event.startDateTime).dateOnly} -{" "}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>

                <p className="md:text-xl">
                  {formatDateTime(event.endDateTime).dateOnly} -{" "}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>
            {/* event location */}
            <div className=" flex items-center gap-4">
              <Image
                src="/assets/icons/location.svg"
                alt="location"
                width={32}
                height={32}
              />
              <p className="text-violet-50 font-body font-light md:text-xl">
                {event.location}
              </p>
            </div>
            {/* event buy ticket button */}
            <Link
              href={"/"}
              className="bg-violet-500 text-center rounded-xl text-2xl font-head font-bold text-white p-4 block"
            >
              Buy Ticket
            </Link>
            {/* about event */}
            <div className="flex flex-col gap-2">
              <p className="font-head font-bold text-violet-50 text-4xl ">
                About the event
              </p>
              <p className="font-body font-light text-violet-50 md:text-xl leading-loose">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default SingleEvent;
