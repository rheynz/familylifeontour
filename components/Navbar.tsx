import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image src="/logo.png" alt="Family Life On Tour Logo" width={40} height={40} className="rounded-full" />
              <span className="font-serif text-2xl font-bold text-slate-900 hidden sm:block">FamilyLifeOnTour</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
            <Link href="/categories/planning" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Planning</Link>
            <Link href="/categories/budget" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Budget</Link>
            <Link href="/categories/nomad" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Nomad</Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
