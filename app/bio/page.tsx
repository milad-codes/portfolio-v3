import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'My Life in Five Minutes' };

const Bio = () => {
  return (
    <main className="max-w-[650px] mx-auto px-6 py-16">
      <h1 className="lr-h1 mb-6">My life in five minutes</h1>

      <p className="mb-6 leading-7">
        My parents, and later the internet, taught me I could build anything.
      </p>

      <p className="mb-6 leading-7">
        I was five years old when I saw <Link href="#">October Sky</Link> (1999)
        in theaters. It&apos;s about a kid inspired by the launch of Sputnik,
        who takes up rocketry against his father&apos;s wishes.
      </p>

      <details className="mb-6">
        <summary className="cursor-pointer text-muted hover:text-text">
          Spoilers: Watch the ending of October Sky
        </summary>
        <p className="mt-3 leading-7 pl-4 border-l-2 border-muted/30">
          Homer wins the science fair and earns a scholarship. He goes on to
          work for NASA as an engineer.
        </p>
      </details>

      <p className="mb-10 leading-7">
        I was enamored with rockets, and unlike Homer&apos;s dad in the film, my
        dad bought me my first model rocket set. My parents started and ran a
        construction business for over 40 years.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="aspect-4/3 bg-white/5 rounded flex items-center justify-center text-muted text-sm">
          Childhood photo
        </div>
        <div className="aspect-4/3 bg-white/5 rounded flex items-center justify-center text-muted text-sm">
          Rocket diagram
        </div>
      </div>

      <p className="mb-6 leading-7">
        I wanted to understand every piece of that rocket. Why were there
        different body shapes? How were the engines made? Could we make even{' '}
        <em>bigger</em> rockets?
      </p>

      <p className="leading-7">
        I didn&apos;t know it at the time, but I was going to be an engineer.
        This obsession with building things continued throughout my childhood.
      </p>
    </main>
  );
};

export default Bio;
