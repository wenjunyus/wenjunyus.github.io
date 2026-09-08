/* oxlint-disable next/no-html-link-for-pages -- Native links avoid the failing Vinext client router in this static export. */

export function SiteHeader({ current }: { current: 'home' | 'research' }) {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <nav aria-label="Main navigation">
          <a href="/" aria-current={current === 'home' ? 'page' : undefined}>Home</a>
          <a href="/research" aria-current={current === 'research' ? 'page' : undefined}>Research</a>
        </nav>
      </div>
    </header>
  );
}
