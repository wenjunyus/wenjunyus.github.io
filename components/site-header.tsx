import Link from 'next/link';

export function SiteHeader({ current }: { current: 'home' | 'research' }) {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <nav aria-label="Main navigation">
          <Link href="/" aria-current={current === 'home' ? 'page' : undefined}>Home</Link>
          <Link href="/research" aria-current={current === 'research' ? 'page' : undefined}>Research</Link>
        </nav>
      </div>
    </header>
  );
}
