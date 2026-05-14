import Link from "next/link";
import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      
      {/* 404 Text */}
      <h1 className="text-8xl font-extrabold text-cyan-400">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}