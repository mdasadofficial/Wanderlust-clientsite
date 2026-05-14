import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white/20 backdrop-blur-sm px-10 py-5 items-center">
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/destinations">Destinations</Link>
        </li>
        <li>
          <Link href="/my-bookings">My Bookings</Link>
        </li>
        <li>
          <Link href="/add-destination">Add Destination</Link>
        </li>
      </ul>
      <div>
        <Image
          src="/assets/Wanderlust.png"
          alt="WanderlustLogo"
          width={150}
          height={150}
        />
      </div>
      <ul className="flex gap-3">
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
