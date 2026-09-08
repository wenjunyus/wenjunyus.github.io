import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { news, profile, professionalServices } from '@/lib/profile';

export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main id="main">
        <section className="hero" aria-labelledby="name">
          <div className="container hero-content">
            <h1 id="name">
              <span className="chinese-name" lang="zh-Hans">{profile.chineseName}</span>
              <span>{profile.name}</span>
            </h1>
            <p className="name-pronunciation" lang="en-fonipa" title="Pronunciation of Wenjun Yu (IPA)">{profile.pronunciation}</p>
            <p className="hero-institution">{profile.institution}</p>
          </div>
        </section>
        <div className="container home-content">
          <section className="section-row" aria-label="Bio">
            <img className="bio-portrait" src="/wenjun-yu.png" alt={profile.name} width={1279} height={1828} />
            <div className="prose">
              <p>I am a Ph.D. candidate in Computer Science and an HKU Presidential PhD Scholar at the University of Hong Kong, supervised by <a href="https://qizhao-quantum.github.io/">Prof. Qi Zhao</a> and <a href="https://i.cs.hku.hk/~giulio/">Prof. Giulio Chiribella</a>.</p>
              <p>I study quantum algorithms and the theoretical foundations of practical quantum advantage.</p>
              <p>I received my B.Eng. in Computer Science from Tsinghua University, where I studied in the Yao Class.</p>
              <Link href="/research" className="text-link">Explore my research <span aria-hidden="true">↗</span></Link>
            </div>
          </section>
          <section className="section-row" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact Me</h2>
            <div className="contact-content">
              <div>
                <p className="contact-label">Email</p>
                <p className="email">{profile.email}</p>
                <a className="text-link scholar-link" href={profile.scholar}>Google Scholar <span aria-hidden="true">↗</span></a>
              </div>
              <address>The University of Hong Kong<br />Pokfulam Road<br />Hong Kong SAR</address>
            </div>
          </section>
          <section className="section-row" aria-labelledby="news-heading">
            <h2 id="news-heading">News</h2>
            <ol className="news-list">
              {news.map((item) => (
                <li key={`${item.date}-${item.href}`}>
                  <time dateTime={item.date}>{item.label}</time>
                  <p>{item.before}<a href={item.href}>{item.linkText}</a>{item.after}</p>
                </li>
              ))}
            </ol>
          </section>
          <section className="section-row" aria-labelledby="services-heading">
            <h2 id="services-heading">Professional Services</h2>
            <dl className="services-list">
              {professionalServices.map((service) => (
                <div key={service.role}>
                  <dt>{service.role}</dt>
                  <dd>{service.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
