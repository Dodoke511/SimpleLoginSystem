import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-end items-center">
        <div className="flex gap-4">
          <Link 
            href="/register" 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Register
          </Link>
          <Link 
            href="/login" 
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Log in
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Spriggly!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            GROW A GARDEN RIPOFF FROM ROBLOX :D
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/register" 
              className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/login" 
              className="px-6 py-3 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
