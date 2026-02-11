import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'How to respond to angry feedback' };

const items = [
  'Stay humble.',
  "Don't take it personally.",
  'Accept that not everyone will like you.',
  'If you turn off replies on a post, you already lost.',
  "Don't use humor or sarcasm when they’re upset.",
  'Don’t use “corpospeak”. Speak plainly, without jargon.',
  "If you don't know the answer, admit it and say what you're doing to find out.",
  'Make people feel heard. Behind almost every frustrated customer is real, helpful feedback.',
  "Be kind and empathetic when responding to negative feedback. Even if they don't deserve it.",
  "Don't reject feedback. You're saying they're wrong, which makes them defend themselves.",
  'Write in public for the secondary audience, not the antagonistic user.',
  "Explain, don't defend. You can say the exact same thing in a way that sounds bitter or sounds transparent.",
  'Take more responsibility than seems necessary. Take so much ownership that it surprises people.',
  'Everything you post either helps or hurts a narrative. Sometimes there can be value in responding carefully if it plays well to spectators.',
  'If you present yourself in a way that makes people believe you are bragging or cocky, they will be more likely to try and knock you down a peg.',
  'When discussing deeply technical topics, be exceptionally detailed in your response. Be calm, factual, and empathetic to their concerns.',
  "If you apologize, fully commit. State the problem, explain the fix, share what you're doing to prevent it. But only apologize if you truly believe it.",
] as const;

export default function FeedbackPage() {
  return (
    <main className="lr-page">
      <div className="mb-10">
        <h1 className="lr-h1">How to respond to angry feedback</h1>
        <Link
          href="/"
          className="lr-subtitle no-underline text-nav hover:text-nav-hover transition-colors"
        >
          By Milad Akbari
        </Link>
      </div>

      <p className="text-[17px] leading-[25.5px] mb-6">
        Here&apos;s how I recommend responding to customer feedback:
      </p>

      <ol className="lr-ol">
        {items.map((text) => (
          <li key={text} className="lr-oli">
            {text}
          </li>
        ))}
      </ol>

      <p className="text-[17px] leading-[25.5px] mt-8">
        And finally, sometimes you need to post through it. Remember, not
        everyone is going to like you.
      </p>

      <hr className="my-10 border-muted/30" />

      <p className="text-[17px] leading-[25.5px] italic">
        (Some of these are inspired by{' '}
        <a href="https://x.com/lulumeservey">Lulu</a> from{' '}
        <a href="https://rostra.co/">Rostra</a>)
      </p>
    </main>
  );
}
