import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="font-serif text-2xl font-bold text-slate-900">FamilyLifeOnTour</span>
            <p className="text-slate-500 text-base">
              Smart family travel, digital nomad families, remote work parents, homeschooling while traveling, and travel budgeting.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Content</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/blog" className="text-base text-slate-500 hover:text-slate-900">All Posts</Link></li>
                  <li><Link href="/categories/destinations" className="text-base text-slate-500 hover:text-slate-900">Destinations</Link></li>
                  <li><Link href="/categories/homeschooling" className="text-base text-slate-500 hover:text-slate-900">Homeschooling</Link></li>
                  <li><Link href="/categories/budgeting" className="text-base text-slate-500 hover:text-slate-900">Budgeting</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/about" className="text-base text-slate-500 hover:text-slate-900">About Us</Link></li>
                  <li><Link href="/contact" className="text-base text-slate-500 hover:text-slate-900">Contact</Link></li>
                  <li><Link href="#" className="text-base text-slate-500 hover:text-slate-900">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-base text-slate-500 hover:text-slate-900">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; {new Date().getFullYear()} FamilyLifeOnTour.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
