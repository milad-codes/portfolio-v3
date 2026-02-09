import Image from 'next/image';
import Link from 'next/link';

const pClassName = 'text-[17px] leading-[25.5px] my-5';
const liClassName =
  "relative pl-4 pr-1 mb-1 before:content-['■'] before:absolute before:left-0 before:top-0";

export default function Home() {
  return (
    <main className="max-w-[650px] mx-auto px-8 pt-32 pb-16">
      <div className="flex items-start gap-6 mb-6">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl leading-6 font-medium tracking-[-0.02em] text-heading mb-1">
            Milad Akbari
          </h1>
          <p className="text-[15px] leading-5 text-muted-foreground/90 tracking-[-0.01em]">
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
        My work sits at the intersection of backend systems, modern web, and
        agentic AI workflows. Recently, my focus has been on agent-based systems
        using langchain and langgraph designing constrained, observable AI
        agents that solve real problems.
      </p>
      {/* 
      <p className={pClassName}>
        I care about clean architecture, scalable systems, and turning complex
        AI ideas into practical, reliable software.
      </p> */}

      <p className={pClassName}>Things I Think About</p>

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
          href="https://linkedin.com/in/milad-codes"
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
