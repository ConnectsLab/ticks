import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Collections from "@/components/shared/Collections";
import { getAllEvents } from "@/lib/actions/event.action";

const SeeEvents = async () => {
  const events = await getAllEvents();

  return (
    <>
      <Navbar />
      <main className="md:w-[70%] mx-auto p-4 ">
        <h4 className="font-head font-bold text-violet-50 text-2xl md:text-4xl my-4">
          Find Events
        </h4>
        <Collections data={events} />
      </main>
      <Footer />
    </>
  );
};

export default SeeEvents;
