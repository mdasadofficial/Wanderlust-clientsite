import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiEdit, BiSolidCalendarHeart } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
  } = destination;
  console.log(destination);
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" items-center flex justify-end gap-2 p-2">
        <EditModal destination={destination} />
        <DeleteAlert destination={destination} />
      </div>
      <Image
        className="w-full h-100 object-cover"
        src={imageUrl}
        height={500}
        width={800}
        alt={destinationName}
      />
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
          <div>
            <h3 className="text-2xl font-bold">${price}</h3>
          </div>
        </div>
        <h1 className="mt-10 text-2xl font-bold">Overview</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
