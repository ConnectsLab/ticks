// import { IEvent } from "@/database/event.model";
// import { formatDateTime, formatPrice } from "@/lib/utilis";
// import { ChevronRight, Edit3 } from "lucide-react";
// import Link from "next/link";

// type EventsCardTypes = {
//   event: IEvent;
//   userId: string | unknown;
// };

// const EventsCard = ({ event, userId }: EventsCardTypes) => {
//   // let check if the user is same as the event organizers
//   const isUserOrganizer = event.organizer._id === userId;

//   return (
//     <div key={event._id} className="shadow-md bg-slate-800 rounded-lg relative">
//       {/* Edit button */}
//       {isUserOrganizer && (
//         <div className="absolute top-2 right-2">
//           <button className="bg-violet-500 rounded-full p-4">
//             <Link href={`/events/${event._id}/update`}>
//               <Edit3 strokeWidth={1} color="#fff" />
//             </Link>
//           </button>
//         </div>
//       )}
//       {/* image */}
//       <div className="h-[300px] object-center">
//         <img src={event.imageUrl} alt={event.title} className="h-full w-full" />
//       </div>
//       {/* info */}
//       <div className="text-violet-50 p-3 space-y-6">
//         {/* event Time And Location */}
//         <div className="flex gap-4">
//           <div className="text-violet-50 font-body font-light">
//             <p className="md:text-base">
//               {formatDateTime(event.startDateTime).dateOnly} -{" "}
//               {formatDateTime(event.startDateTime).timeOnly}
//             </p>
//           </div>
//         </div>
//         {/* free or paid */}
//         <div>
//           <span className="font-head bg-green-200 text-green-700 font-bold px-6 py-1 inline-block rounded-full uppercase text-base">
//             {event.isFree ? "Free" : formatPrice(event.price)}
//           </span>
//         </div>
//         <h2 className="font-head font-bold capitalize text-xl line-clamp-1">
//           {event.title}
//         </h2>
//         {/* event Organizers */}
//         <div className="capitalize font-body font-light">
//           by {event.organizer.firstName} {event.organizer.lastName}
//         </div>
//         {/* See More Info */}
//         <Link
//           href={`/events/${event._id}`}
//           className="flex font-body font-light items-center"
//         >
//           More Info <ChevronRight strokeWidth={1} size={20} />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EventsCard;

import React from "react";

const EventsCard = () => {
  return <div>EventsCard</div>;
};

export default EventsCard;
