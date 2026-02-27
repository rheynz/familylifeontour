import { getAllPosts } from '@/lib/getPosts';
import ArticleCard from '@/components/ArticleCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on family travel, remote work, and homeschooling.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">The Nomad Family Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stories, tips, and guides from our life on the road.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
