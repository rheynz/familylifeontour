interface ShareButtonsProps {
  url: string;
  title: string;
  image?: string;
}

export default function ShareButtons({ url, title, image }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedImage = image ? encodeURIComponent(image) : '';

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`;

  return (
    <div className="flex items-center space-x-4 py-6 border-t border-b border-slate-100 my-8">
      <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Share this article:</span>
      <div className="flex space-x-3">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
          aria-label="Share on Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#1877F2] hover:text-white transition-colors"
          aria-label="Share on Facebook"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </a>
        <a
          href={pinterestUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#E60023] hover:text-white transition-colors"
          aria-label="Share on Pinterest"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.017 2C6.467 2 2 6.467 2 12.017c0 4.27 2.66 7.92 6.475 9.35-.088-.79-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.298-.6-.298-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.78.744 2.28.08.1.09.185.066.284-.075.317-.24 1.004-.272 1.135-.043.178-.14.217-.324.13-1.21-.57-1.967-2.368-1.967-3.81 0-3.097 2.25-5.94 6.49-5.94 3.414 0 6.07 2.43 6.07 5.69 0 3.395-2.138 6.124-5.11 6.124-1 0-1.938-.52-2.26-1.13l-.615 2.34c-.224.854-.83 1.916-1.238 2.565 1.04.32 2.14.49 3.28.49 5.55 0 10.017-4.466 10.017-10.016C22.034 6.467 17.567 2 12.017 2z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
