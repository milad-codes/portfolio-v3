import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Things I Believe' };

const Beliefs = () => {
  return (
    <main className="lr-page lr-beliefs">
      <div className="mb-16">
        <h1 className="lr-h1">Things I Believe</h1>
        <Link
          href="/"
          className="lr-subtitle no-underline text-nav hover:text-nav-hover transition-colors"
        >
          By Lee Robinson
        </Link>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="lr-h2 mb-4">Shipping fast beats the best strategy</h2>
          <ul className="lr-list">
            <li className="lr-li">
              Speed is a{' '}
              <a href="https://x.com/thejamescad/status/1929324444176044047">
                superpower
              </a>
            </li>
            <li className="lr-li">Create a bias toward shipping</li>
            <li className="lr-li">Small teams ship faster</li>
            <li className="lr-li">
              <a href="https://x.com/leerob/status/1929727742821413331">
                AI-native
              </a>{' '}
              teams will move 10x faster than those not willing to change
            </li>
            <li className="lr-li">
              {'Landings > launches (i.e. product adoption > shipping code)'}
            </li>
            <li className="lr-li">
              Listen, build, ship, tell the customer, then repeat forever
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">You have no career ceiling</h2>
          <ul className="lr-list">
            <li className="lr-li">Grit &gt; talent</li>
            <li className="lr-li">
              There’s no substitute for{' '}
              <a href="https://www.youtube.com/watch?v=RDyg_41QF1w">
                putting in the hours
              </a>
            </li>
            <li className="lr-li">
              Get{' '}
              <a href="https://x.com/leerob/status/1841226051554308229">
                1% better
              </a>{' '}
              every day
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">Be ruthlessly truth seeking</h2>
          <ul className="lr-list">
            <li className="lr-li">The truth can be painful</li>
            <li className="lr-li">You can just change your mind if wrong</li>
            <li className="lr-li">Have strong opinions, loosely held</li>
            <li className="lr-li">Maximize your exposure hours</li>
            <li className="lr-li">&quot;Anecdata&quot; &gt; data</li>
            <li className="lr-li">
              Seek the collective truth, not just one opinion
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">Communication is the job</h2>
          <ul className="lr-list">
            <li className="lr-li">
              <a href="https://paulgraham.com/talk.html">Clear writing</a> is
              clear thinking
            </li>
            <li className="lr-li">
              Everyone (yes, you) needs to become a{' '}
              <a href="https://sorfis.com/wp-content/uploads/2021/09/Writing-Tips-Scott-Adams-DFW-Sowin-compilation-Zweig.pdf">
                better writer
              </a>
            </li>
            <li className="lr-li">
              Leaders step up to provide clarity when absent
            </li>
            <li className="lr-li">
              Be the person taking notes, even if it’s just for yourself
            </li>
            <li className="lr-li">Mismatched expectations lead to sadness</li>
            <li className="lr-li">
              Slack pro tip: anticipate objections before hitting send, then{' '}
              <a href="https://newsletter.weskao.com/p/super-specific-feedback">
                address them
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">
            Education is the best form of developer marketing
          </h2>
          <ul className="lr-list">
            <li className="lr-li">Be authentic and own your failures</li>
            <li className="lr-li">
              Never use the word &quot;webinar&quot; ever again
            </li>
            <li className="lr-li">Being helpful compounds</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">
            Leadership means owning outcomes beyond the org chart
          </h2>
          <ul className="lr-list">
            <li className="lr-li">Influence &gt; titles</li>
            <li className="lr-li">
              Leaders have to do the work themselves <em>and</em> delegate
            </li>
            <li className="lr-li">You can write your own playbook</li>
            <li className="lr-li">
              Study what worked for others, then take your own path
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">Work can also be your hobby</h2>
          <ul className="lr-list">
            <li className="lr-li">
              This doesn’t mean you can’t have other hobbies
            </li>
            <li className="lr-li">
              Passion + boundaries &gt; mythical &quot;work-life balance&quot;
            </li>
            <li className="lr-li">
              Your best work comes from following your curiosity
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">Demos &gt; memos</h2>
          <ul className="lr-list">
            <li className="lr-li">
              You could have built a prototype in{' '}
              <a href="https://v0.dev/">v0</a> during the meeting
            </li>
            <li className="lr-li">
              Only ship things you&apos;re{' '}
              <a href="https://x.com/rauchg/status/1932126547609334017">
                excited about yourself
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">
            Hiring is what separates good leaders from great
          </h2>
          <ul className="lr-list">
            <li className="lr-li">
              There are two hiring answers:{' '}
              <a href="https://sive.rs/n">hell yes</a> or no
            </li>
            <li className="lr-li">Growth potential &gt; current skill</li>
            <li className="lr-li">Hire people you can learn from</li>
            <li className="lr-li">
              Hire people you would someday be happy working for
            </li>
            <li className="lr-li">
              Favorite interview question: what work are you most proud of?
            </li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">Always try to assume good intent</h2>
          <ul className="lr-list">
            <li className="lr-li">Lead with empathy</li>
            <li className="lr-li">They might just be having a bad day</li>
            <li className="lr-li">
              Criticism is <Link href="/feedback">good feedback</Link> if you
              listen unemotionally
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Beliefs;
