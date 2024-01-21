import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Collections from "@/components/shared/Collections";
import { getAllEvents } from "@/lib/actions/event.action";
import Link from "next/link";

export default async function Home() {
  // fetch all events
  const events = await getAllEvents();

  return (
    <>
      <Navbar />
      {/* hero section */}
      <div className="my-4 p-4 flex flex-col items-center justify-center gap-4 text-center md:w-[50%] mx-auto">
        <h1 className="md:text-5xl text-3xl font-head font-bold text-violet-50">
          Host, And Celebrate your Events on the best intuitive platform
        </h1>
        <p className="font-body font-light text-violet-50 ">
          Your events deserve the best, and Ticks is here to deliver. If you
          haven't taken the plunge yet, seize the moment.
        </p>
        <Link
          href="/see-events"
          className=" p-4 rounded-lg text-violet-50 font-head font-bold bg-violet-500 md:text-3xl text-xl"
        >
          Find Events
        </Link>
      </div>
      {/* see events  */}
      <div className="md:w-[75%] mx-auto p-4">
        <h4 className="md:text-3xl text-3xl font-head font-bold text-violet-50 my-4">
          Latest Events
        </h4>
        <Collections data={events} />
      </div>
      <Footer />
    </>
  );
}
