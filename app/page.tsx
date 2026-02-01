import { BioPath } from '@/lib/path';
import Link from 'next/link';

const pClassName = 'text-[17px] leading-[25.5px] my-5';
const liClassName =
  "relative pl-4 pr-1 mb-1 before:content-['■'] before:absolute before:left-0 before:top-0";

export default function Home() {
  return (
    <main className="max-w-[650px] mx-auto px-8 pt-32 pb-16">
      <h1 className="text-2xl leading-6 font-medium tracking-[-0.02em] text-heading mb-1">
        Lee Robinson
      </h1>

      <p className={pClassName}>
        I&apos;m a <Link href={BioPath()}>developer and writer</Link>. I work at{' '}
        <Link href="/cursor">Cursor</Link> teaching about AI. Previously, I
        worked at <Link href="/vercel">Vercel</Link>. I&apos;ve been coding for
        15 years and teaching for the second half.
      </p>

      <p className={pClassName}>
        My life&apos;s work is to make technology easy to understand and
        interesting to learn about. I&apos;m a husband, father, and a massive{' '}
        <Link href="/music">music fan</Link>. I last listened to{' '}
        <a
          href="https://open.spotify.com/track/51ODNNDZm21HU7wI7cccRr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Latch
        </a>{' '}
        by Disclosure, Sam Smith.
      </p>

      <p className={pClassName}>Some of my favorite writing includes:</p>

      <ul className="text-[17px] leading-[25.5px] list-none p-0 m-0">
        <li className={liClassName}>
          <Link href="/beliefs">Things I Believe</Link>
        </li>
        <li className={liClassName}>
          <Link href="/agents">Coding Agents & Complexity Budgets</Link>
        </li>
        <li className={liClassName}>
          <Link href="/pixo">
            Building Low-Level Software with Only Coding Agents
          </Link>
        </li>
        <li className={liClassName}>
          <Link href="/compression">How Does Image Compression Work?</Link>
        </li>
        <li className={liClassName}>
          <Link href="/developer-marketing">Developer Marketing</Link>
        </li>
        <li className={liClassName}>
          <Link href="/ai">Understanding AI</Link>
        </li>
      </ul>

      <p className={pClassName}>
        You can <Link href="/writing">read my writing</Link> or{' '}
        <a
          href="https://github.com/leerob"
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>
        , or{' '}
        <a
          href="https://x.com/leerob"
          target="_blank"
          rel="noopener noreferrer"
        >
          follow me online
        </a>
        . I also make{' '}
        <a
          href="https://www.youtube.com/@leerob"
          target="_blank"
          rel="noopener noreferrer"
        >
          videos
        </a>
        , advise companies, and do angel investing.{' '}
        <a href="mailto:lee@leerob.com">Reach out</a> if interested.
      </p>
    </main>
  );
}
