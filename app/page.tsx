import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">🎬 Creator Marketplace</h1>
          <div className="flex items-center gap-4">
            <Link href="/creators" className="text-gray-600 hover:text-gray-900">
              Find Creators
            </Link>
            <Link href="/jobs" className="text-gray-600 hover:text-gray-900">
              Browse Jobs
            </Link>
            <Link href="/auth/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </Link>
            <Link href="/auth/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Connect Creators with Opportunities
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The premier platform for African creators and businesses to collaborate, create amazing content, and build successful partnerships.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/auth/signup" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-lg">
            Get Started as Creator
          </Link>
          <Link href="/auth/signup" className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold text-lg">
            Post a Job as Business
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-4xl mb-4">🎤</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Verified Creators</h4>
            <p className="text-gray-600">Access to verified, professional creators across all categories.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h4>
            <p className="text-gray-600">Escrow protection ensures safe transactions for both parties.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Real-Time Communication</h4>
            <p className="text-gray-600">Chat directly with creators or businesses instantly.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8">Join thousands of creators and businesses already on the platform.</p>
          <Link href="/auth/signup" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-bold text-lg inline-block">
            Sign Up Free Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 Creator Marketplace. All rights reserved.</p>
          <p className="mt-2">Cape Town, South Africa 🏙️</p>
        </div>
      </footer>
    </div>
  )
}
