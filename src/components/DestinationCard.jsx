import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCalendarHeart } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } =
    destination;
  return (
    <div className="border rounded-2xl ">
      <Image
        className="rounded-t-2xl"
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
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
      <Link href={`/destinations/${_id}`}>
        <Button variant="ghost" className={"mt-1 text-cyan-500 items-center"}>
          <LiaExternalLinkSquareAltSolid />
          Book Now
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
