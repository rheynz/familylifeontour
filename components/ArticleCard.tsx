import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { Post } from '@/lib/getPosts';

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden border border-slate-100">
      <div className="flex-shrink-0 relative h-48 w-full">
        <Image
          className="object-cover"
          src={post.image || 'https://picsum.photos/seed/family/800/600'}
          alt={post.title}
          fill
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-emerald-600">
            <Link href={`/categories/${post.category?.toLowerCase()}`} className="hover:underline">
              {post.category}
            </Link>
          </p>
          <Link href={`/blog/${post.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-slate-900 font-serif">{post.title}</p>
            <p className="mt-3 text-base text-slate-500 line-clamp-3">{post.description}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{post.author}</span>
            <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
              {post.author?.charAt(0) || 'A'}
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-slate-900">{post.author}</p>
            <div className="flex space-x-1 text-sm text-slate-500">
              <time dateTime={post.date}>{post.date ? format(new Date(post.date), 'MMM d, yyyy') : ''}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
