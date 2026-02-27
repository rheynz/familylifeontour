import { getPostBySlug, getAllPosts } from '@/lib/getPosts';
import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import AffiliateDisclaimer from '@/components/AffiliateDisclaimer';
import AdPlaceholder from '@/components/AdPlaceholder';
import Newsletter from '@/components/Newsletter';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: [post.image],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [post.image],
      }
    };
  } catch (e) {
    return { title: 'Post Not Found' };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  // Basic Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    description: post.description,
  };

  return (
    <article className="bg-white min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <Image
          src={post.image || 'https://picsum.photos/seed/post/1920/1080'}
          alt={post.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100">
          <div className="text-center mb-8">
            <span className="text-emerald-600 font-medium tracking-wider uppercase text-sm">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-slate-500 text-sm space-x-4">
              <span className="font-medium text-slate-900">{post.author}</span>
              <span>&bull;</span>
              <time dateTime={post.date}>{post.date ? format(new Date(post.date), 'MMMM d, yyyy') : ''}</time>
            </div>
          </div>

          <AffiliateDisclaimer />

          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-img:rounded-xl prose-img:shadow-md">
            <Markdown
              components={{
                img: ({ node, ...props }) => {
                  return (
                    <span className="block relative w-full h-[400px] sm:h-[500px] my-8">
                      <Image
                        src={typeof props.src === 'string' ? props.src : ''}
                        alt={props.alt || 'Blog image'}
                        fill
                        className="object-cover rounded-xl shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    </span>
                  );
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>

          <AdPlaceholder />

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Newsletter />
          </div>
        </div>
      </div>
    </article>
  );
}
