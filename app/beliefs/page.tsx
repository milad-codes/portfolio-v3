import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Things I Believe' };

const Beliefs = () => {
  return (
    <main className="max-w-[650px] mx-auto px-6 py-16">
      <h1 className="text-2xl font-medium text-heading mb-1">
        Things I Believe &nbsp; • &nbsp; By Milad Akbari
      </h1>
      <p className="text-muted mb-10">By Lee Robinson</p>

      <section className="mb-10">
        <h2 className="text-lg font-medium text-heading mb-4">
          Shipping fast beats the best strategy
        </h2>
        <ul className="list-disc list-inside space-y-1.5">
          <li>
            Speed is a <a href="#">superpower</a>
          </li>
          <li>Create a bias toward shipping</li>
          <li>Small teams ship faster</li>
          <li>
            <a href="#">AI-native</a> teams will move 10x faster than those not
            willing to change
          </li>
          <li>
            {'Landings > launches (i.e. product adoption > shipping code)'}
          </li>
          <li>Listen, build, ship, tell the customer, then repeat forever</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-medium text-heading mb-4">
          You have no career ceiling
        </h2>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Grit &gt; talent</li>
          <li>
            There&apos;s no substitute for <a href="#">putting in the hours</a>
          </li>
          <li>Get 1% better every day</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium text-heading mb-4">
          Be ruthlessly truth seeking
        </h2>
        <ul className="list-disc list-inside space-y-1.5">
          <li>The truth can be painful</li>
          <li>You can just change your mind if wrong</li>
          <li>Have strong opinions, loosely held</li>
        </ul>
      </section>
    </main>
  );
};

export default Beliefs;
