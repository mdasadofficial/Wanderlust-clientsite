import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user
  console.log(user?.session?.token);

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const destination = await res?.json();
console.log("Database unique data:", destination);

  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
  } = destination;
  // console.log(destination);
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className=" items-center flex justify-end gap-2 p-2">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
      </div>
      <Image
        className="w-full h-100 object-cover"
        src={imageUrl  }
        height={500}
        width={800}
        alt={destinationName}
      />
      <div className="flex justify-between py-5">
        <div className="p-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>{country}</span>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <h2 className="text-xl font-bold ">{destinationName}</h2>
              </div>
              <div className="flex gap-1 items-center">
                {" "}
                <BiSolidCalendarHeart /> {duration}
              </div>
            </div>
          </div>
          <h1 className="mt-10 text-2xl font-bold">Overview</h1>
          <p>{description}</p>
        </div>

        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
