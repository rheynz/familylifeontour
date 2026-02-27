import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import { getAllPosts } from '@/lib/getPosts';

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight mb-6">
            Smart Family Travel for Modern Parents
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-light">
            Live. Work. Explore. Together.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/blog" 
              className="px-8 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-md text-lg"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/categories/destinations" className="group relative rounded-2xl overflow-hidden h-64 shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-emerald-900/40 group-hover:bg-emerald-900/30 transition-colors z-10" />
              <Image src="https://picsum.photos/seed/dest/800/600" alt="Destinations" fill className="absolute inset-0 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-3xl font-serif font-bold text-white tracking-wide">Destinations</h3>
              </div>
            </Link>
            <Link href="/categories/homeschooling" className="group relative rounded-2xl overflow-hidden h-64 shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-indigo-900/40 group-hover:bg-indigo-900/30 transition-colors z-10" />
              <Image src="https://picsum.photos/seed/school/800/600" alt="Homeschooling" fill className="absolute inset-0 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-3xl font-serif font-bold text-white tracking-wide">Homeschooling</h3>
              </div>
            </Link>
            <Link href="/categories/budgeting" className="group relative rounded-2xl overflow-hidden h-64 shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-amber-900/40 group-hover:bg-amber-900/30 transition-colors z-10" />
              <Image src="https://picsum.photos/seed/budget/800/600" alt="Budgeting" fill className="absolute inset-0 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="text-3xl font-serif font-bold text-white tracking-wide">Budgeting</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Latest Articles</h2>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">View all &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
