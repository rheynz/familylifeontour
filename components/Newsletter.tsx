'use client';

export default function Newsletter() {
  return (
    <div className="bg-emerald-50 rounded-2xl p-8 sm:p-12 my-12 text-center max-w-4xl mx-auto shadow-sm border border-emerald-100">
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Join Our Nomad Family</h2>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        Get weekly tips on smart family travel, remote work strategies, and homeschooling resources delivered straight to your inbox.
      </p>
      <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-slate-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  );
}
