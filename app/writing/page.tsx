import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Writing' };

const posts = [
  { title: 'Coding Agents & Complexity Budgets', href: '/agents' },
  {
    title: 'Building Low-Level Software with Only Coding Agents',
    href: '/pixo',
  },
  { title: 'How Does Image Compression Work?', href: '/compression' },
  { title: 'Things I Believe', href: '/beliefs' },
  { title: 'Understanding AI', href: '/ai' },
  { title: 'Developer Experience', href: '/dx' },
  { title: 'Developer Marketing', href: '/developer-marketing' },
  { title: 'Developer Relations', href: '/devrel' },
  { title: 'Developer Products', href: '/devtools' },
  { title: 'Documentation', href: '/docs' },
  { title: 'Community Moderation', href: '/moderation' },
  { title: 'How to Respond to Angry Feedback', href: '/feedback' },
  { title: 'Reflections on the React community', href: '/reflections' },
  { title: '5 Things I Learned from 5 Years at Vercel', href: '/vercel' },
  { title: 'Personal Software', href: '/personal-software' },
  { title: 'My Stack', href: '/stack' },
  { title: "How I'm Writing CSS", href: '/css' },
  { title: 'Product Engineers', href: '/product-engineers' },
  { title: 'Rust is Eating JavaScript', href: '/rust' },
  { title: 'The Story of Heroku', href: '/heroku' },
] as const;

export default function WritingPage() {
  return (
    <main className="lr-page">
      <div className="mb-10">
        <h1 className="lr-h1">Writing</h1>
        <Link
          href="/"
          className="lr-subtitle no-underline text-nav hover:text-nav-hover transition-colors"
        >
          By Lee Robinson
        </Link>
      </div>

      <p className="text-[17px] leading-[25.5px] mb-6">
        Here’s a list of my writing:
      </p>

      <ul className="lr-list">
        {posts.map((post) => (
          <li key={post.href} className="lr-li">
            <Link href={post.href}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <hr className="mt-16 border-muted/30" />
    </main>
  );
}
