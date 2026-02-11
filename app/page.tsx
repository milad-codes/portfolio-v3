import Image from 'next/image';
import Link from 'next/link';

const pClassName = 'text-[17px] leading-[25.5px] my-5';

export default function Home() {
  return (
    <main className="max-w-[650px] mx-auto px-8 pt-24">
      <div className="flex items-start gap-6 mb-6">
        <div className="min-w-0 flex-1">
          <h1 className="lr-h1">Milad Akbari</h1>
          <p className="lr-subtitle">
            Building Europe&apos;s leading EV auction platform
          </p>
        </div>
        <div className="shrink-0 -mt-5">
          <Image
            src="/original_profile.png"
            unoptimized
            alt="Milad Akbari"
            width={78}
            height={78}
            className="rounded-full object-cover w-[61.8px] h-[61.8px] sm:w-[78px] sm:h-[78px]"
          />
        </div>
      </div>

      <p className={pClassName}>
        I&apos;m a full-stack AI engineer{' '}
        <a
          href="https://www.aampere.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          @Aampere
        </a>{' '}
        based in Munich. Previously, I worked at{' '}
        <a
          href="https://turkiyemaarif.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          TMV
        </a>
        . I&apos;ve been coding for 5+ years, mainly in the TypeScript and
        Python.
      </p>

      <p className={pClassName}>
        Most developers pick a side. I never could. I&apos;d be deep in a NestJS
        module, perfectly happy, then wander over to a Next.js component and
        lose an hour on details that didn&apos;t need to be that good. I love
        the moment when a well-typed NestJS service shakes hands with a
        Langchain and LangGraph workflow and something genuinely useful comes to
        life.
      </p>
      {/* 
      <p className={pClassName}>
        I care about clean architecture, scalable systems, and turning complex
        AI ideas into practical, reliable software.
      </p> */}

      <p className={pClassName}>Things I Think About</p>

      <ul className="lr-list">
        <li className="lr-li">
          <Link href="/beliefs">Things I Believe</Link>
        </li>
        <li className="lr-li">
          <Link href="/agents">Coding Agents & Complexity Budgets</Link>
        </li>
        <li className="lr-li">
          <Link href="/pixo">
            Building Low-Level Software with Only Coding Agents
          </Link>
        </li>
        <li className="lr-li">
          <Link href="/compression">How Does Image Compression Work?</Link>
        </li>
        <li className="lr-li">
          <Link href="/developer-marketing">Developer Marketing</Link>
        </li>
        <li className="lr-li">
          <Link href="/ai">Understanding AI</Link>
        </li>
      </ul>

      <p className={pClassName}>
        You can{' '}
        <Link href="/writing" className="underline">
          read my writing
        </Link>{' '}
        or{' '}
        <a
          href="https://github.com/milad-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          code
        </a>
        , or{' '}
        <a
          href="https://www.linkedin.com/in/miladcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          follow me online
        </a>
        . I also make videos, advise companies, and do angel investing.{' '}
        <a href="mailto:contact@miladcodes.com" className="underline">
          Reach out
        </a>{' '}
        if interested.
      </p>
    </main>
  );
}
