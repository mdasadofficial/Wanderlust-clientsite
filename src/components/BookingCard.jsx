"use client";

import { authClient } from "@/app/api/auth/[...all]/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //   console.log(user);

  const [departureDate, setDepartureDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country } = destination;
  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    toast.success("Booking successful! ");
  };

  // console.log(new Date(departureDate));

  return (
    <Card className="border py-4">
      <p className="text-sm text-muted">Starting from</p>
      <h2 className="text-2xl font-bold text-cyan-500">${price}</h2>
      <p className="text-sm text-muted">Per person</p>
      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date </Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button onClick={handleBooking} className="w-full bg-cyan-500">
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
