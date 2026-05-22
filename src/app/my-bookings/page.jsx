import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <Card >
        {bookings.map((booking) => (
          <div key={booking._id} className="border min-w-3xl flex  gap-5 my-5 p-4 mb-4">
            <Image
              className="rounded"
              src={booking.imageUrl}
              alt={booking.destinationName}
              width={200}
              height={200}
            />
            <div>
              <h1> {booking.destinationName} </h1>
              <p className="text-sm text-muted">
                Departure Date:{" "}
                {new Date(booking.departureDate).toLocaleDateString()}
              </p>
              <p className="text-xl font-bold  text-cyan-500">${booking.price}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default MyBookingPage;
