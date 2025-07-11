import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4 sm:p-6 md:p-8">
      <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-red-600 mb-6 mt-16">404</h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
        Page Not Found
      </h2>
      <Link
        href="/"
        className="px-10 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 animate-fade-in-up"
      >
        Go back to Home
      </Link>
    </div>
  );
}