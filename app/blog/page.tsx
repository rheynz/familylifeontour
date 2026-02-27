import { getAllPosts } from '@/lib/getPosts';
import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles on family travel, remote work, and homeschooling.',
};

const POSTS_PER_PAGE = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const query = typeof resolvedSearchParams.q === 'string' ? resolvedSearchParams.q.toLowerCase() : '';
  const currentPage = typeof resolvedSearchParams.page === 'string' ? parseInt(resolvedSearchParams.page) : 1;

  const allPosts = getAllPosts();
  
  // Filter posts based on search query
  const filteredPosts = allPosts.filter((post) => {
    if (!query) return true;
    return (
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">The Nomad Family Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stories, tips, and guides from our life on the road.
          </p>
        </div>
        
        <Suspense fallback={<div className="h-12 w-full max-w-lg mx-auto bg-slate-200 animate-pulse rounded-xl mb-12"></div>}>
          <SearchBar />
        </Suspense>

        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
            <Suspense fallback={<div className="h-10 w-full max-w-sm mx-auto bg-slate-200 animate-pulse rounded-xl mt-16"></div>}>
              <Pagination totalPages={totalPages} currentPage={currentPage} />
            </Suspense>
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif font-medium text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-500">We couldn&apos;t find any articles matching &quot;{query}&quot;. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}
