import { getPostsByCategory, getAllPosts } from '@/lib/getPosts';
import ArticleCard from '@/components/ArticleCard';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map(post => post.category.toLowerCase())));
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category.charAt(0).toUpperCase() + resolvedParams.category.slice(1);
  return {
    title: `${categoryName} | Family Life On Tour`,
    description: `Articles about ${categoryName} for digital nomad families.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const posts = getPostsByCategory(resolvedParams.category);
  const categoryName = resolvedParams.category.charAt(0).toUpperCase() + resolvedParams.category.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">{categoryName}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore all our articles about {categoryName.toLowerCase()}.
          </p>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No posts found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
