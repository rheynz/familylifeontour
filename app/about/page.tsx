import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the family behind Family Life On Tour.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-xl text-slate-600">The story behind Family Life On Tour.</p>
        </div>
        
        <div className="rounded-2xl overflow-hidden mb-12 h-[400px] relative">
          <Image 
            src="https://picsum.photos/seed/familyabout/1200/800" 
            alt="Our Family" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif">
          <h2>Who We Are</h2>
          <p>
            We are a family of four who decided that the traditional 9-to-5 lifestyle wasn&apos;t for us. 
            Three years ago, we sold our house, packed our essentials, and hit the road to become a full-time digital nomad family.
          </p>
          <h2>Our Mission</h2>
          <p>
            Family Life On Tour was created to inspire and equip other parents who want to travel the world with their children. 
            We believe that travel is the best education, and that working remotely shouldn&apos;t mean sacrificing family time.
          </p>
          <h2>What You&apos;ll Find Here</h2>
          <ul>
            <li><strong>Destinations:</strong> Family-friendly locations we&apos;ve personally vetted.</li>
            <li><strong>Homeschooling:</strong> How we manage &quot;worldschooling&quot; while on the move.</li>
            <li><strong>Budgeting:</strong> Honest breakdowns of what it costs to live this lifestyle.</li>
            <li><strong>Remote Work:</strong> Tips for staying productive when your office changes weekly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
