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
            Get Started
          </Link>
          <Link 
            href="/login" 
            className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Sign In
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

      {/* About Section */}
      <section className="container mx-auto px-4 py-12" id="about">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">About</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
        Spriggly offers a productivity-focused experience by combining task management, time tracking, and gamification. Users can manage their daily tasks, focus using session timers, and earn virtual rewards like XP and coins. These rewards help nurture digital plants, visually representing the user's progress. The platform includes a marketplace, leaderboards, and social features to encourage consistency and healthy competition. Notifications keep users engaged and on track with their goals..
        </p>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4 py-12 bg-blue-50 dark:bg-gray-900" id="faqs">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">What is Spriggly?</h3>
            <p className="text-gray-700 dark:text-gray-200">Spriggly is a web-based garden simulation game TOTALLY NOT inspired from Grow a Garden on Roblox."</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">Is it free to use?</h3>
            <p className="text-gray-700 dark:text-gray-200">Yes! Spriggly is completely free to play and enjoy.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">How do I get started?</h3>
            <p className="text-gray-700 dark:text-gray-200">Simply register for an account and start planting your first seeds!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12" id="contact">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 text-center">Contact</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-6">
          Have questions, feedback, or need support? Reach out to us below!
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="email" placeholder="Your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          <textarea placeholder="Your message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} required></textarea>
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </section>
    </div>
  );
}
