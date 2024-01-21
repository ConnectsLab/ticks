import EventsCard from "./EventsCard";

const Collections = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((event: any) => (
        <EventsCard event={event} key={event._id} />
      ))}
    </div>
  );
};

export default Collections;
