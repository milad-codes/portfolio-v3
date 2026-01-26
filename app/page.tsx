import { BioPath } from '@/lib/path';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-[650px] mx-auto px-6 py-16">
      <h1 className="text-2xl font-medium text-heading mb-6">Lee Robinson</h1>

      <p className="mb-6 leading-7">
        I&apos;m a <Link href={BioPath()}>developer</Link> and{' '}
        <Link href="#">writer</Link>. I work at{' '}
        <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">
          Cursor
        </a>{' '}
        teaching about AI. Previously, I worked at{' '}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Vercel
        </a>
        . I&apos;ve been coding for 15 years and teaching for the second half.
      </p>

      <p className="mb-6 leading-7">
        My life&apos;s work is to make technology easy to understand and
        interesting to learn about. I&apos;m a husband, father, and a massive{' '}
        <Link href="#">music fan</Link>. I last listened to{' '}
        <Link href="#">How Will I Know</Link> by Whitney Houston.
      </p>

      <p className="mb-4">Some of my favorite writing includes:</p>

      <ul className="list-disc list-inside space-y-1.5 mb-6">
        <li>
          <Link href="/things-i-believe">Things I Believe</Link>
        </li>
        <li>
          <Link href="/blog/coding-agents">
            Coding Agents & Complexity Budgets
          </Link>
        </li>
        <li>
          <Link href="/blog/low-level-software">
            Building Low-Level Software with Only Coding Agents
          </Link>
        </li>
        <li>
          <Link href="/blog/understanding-ai">Understanding AI</Link>
        </li>
        <li>
          <Link href="/about">My Life in Five Minutes</Link>
        </li>
        <li>
          <Link href="/blog/five-years-vercel">
            5 Things I Learned From 5 Years At Vercel
          </Link>
        </li>
      </ul>

      <p className="leading-7">
        You can <Link href="#">read my writing</Link> or{' '}
        <Link href="#">code</Link>, or <Link href="#">follow me online</Link>. I
        also make <Link href="#">videos</Link>, advise companies, and do angel
        investing. <Link href="#">Reach out</Link> if interested.
      </p>
    </main>
  );
}
