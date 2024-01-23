// import EventForm from "@/components/shared/EventForm";
// import { getEventById } from "@/lib/actions/event.action";
// import { currentUser } from "@clerk/nextjs";

// type UpdateEventProps = {
//   params: {
//     id: string;
//   };
// };

// const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
//   const user = await currentUser();

//   const userId = user?.publicMetadata.userId;

//   const event = await getEventById(id);

//   return (
//     <>
//       <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
//         <h3 className="font-bold font-head text-violet-50 text-center text-4xl">
//           Update Event
//         </h3>
//       </section>

//       <div className="wrapper my-8 md:w-[80%] mx-auto p-5">
//         <EventForm type="update" event={event} eventId={id} userId={userId} />
//       </div>
//     </>
//   );
// };

// export default UpdateEvent;
