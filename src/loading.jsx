export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin mx-auto"></div>

        {/* Text */}
        <h1 className="mt-6 text-2xl font-bold text-white">
          Loading...
        </h1>

        <p className="mt-2 text-gray-400">
          Please wait while we load your content
        </p>
      </div>
    </div>
  );
}