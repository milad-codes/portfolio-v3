import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Things I Believe' };

const Beliefs = () => {
  return (
    <main className="lr-page">
      <h1 className="lr-h1">Things I Believe</h1>
      <p className="lr-subtitle mb-16">
        <Link href="/">By Milad Akbari</Link>
      </p>

      <div className="space-y-16">
        <section>
          <h2 className="lr-h2 mb-4">Shipping fast beats the best strategy</h2>
          <ul className="lr-list">
            <li className="lr-li">
              Speed is a <a href="#">superpower</a>
            </li>
            <li className="lr-li">Create a bias toward shipping</li>
            <li className="lr-li">Small teams ship faster</li>
            <li className="lr-li">
              <a href="#">AI-native</a> teams will move 10x faster than those
              not willing to change
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
              There&apos;s no substitute for <a href="#">putting in the hours</a>
            </li>
            <li className="lr-li">Get 1% better every day</li>
          </ul>
        </section>

        <section>
          <h2 className="lr-h2 mb-4">Be ruthlessly truth seeking</h2>
          <ul className="lr-list">
            <li className="lr-li">The truth can be painful</li>
            <li className="lr-li">You can just change your mind if wrong</li>
            <li className="lr-li">Have strong opinions, loosely held</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Beliefs;
