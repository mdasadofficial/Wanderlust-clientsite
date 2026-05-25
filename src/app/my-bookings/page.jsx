import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <Card>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="border min-w-3xl flex  gap-5 my-5 p-4 mb-4"
          >
            <Image
              className="rounded"
              src={booking.imageUrl}
              alt={booking.destinationName}
              width={200}
              height={200}
            />
            <div>
              <h1 className="font-bold text-2xl">
                {" "}
                {booking.destinationName}{" "}
              </h1>
              <p className="text-sm text-muted">
                Departure Date:{" "}
                {new Date(booking.departureDate).toLocaleDateString()}
              </p>
              <p>Booking ID:{booking._id}</p>
              <p className="text-xl font-bold  text-cyan-500">
                ${booking.price}
              </p>
              <div className="flex gap-2 mt-4">
                <BookingCancelAlert bookingId={booking._id} />

                {/* <Button
                  className="flex items-center gap-2 hover:bg-red-600 transition"
                  variant="danger"
                >
                  <TrashBin /> Delete
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default MyBookingPage;
