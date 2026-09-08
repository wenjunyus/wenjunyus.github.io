import type { Metadata } from 'next';
import { Fragment } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { profile } from '@/lib/profile';
import { researchGroups } from '@/lib/research';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Research by Wenjun Yu in quantum simulation, quantum characterization and learning, and quantum states and resources.',
  alternates: { canonical: 'https://wenjunyus.github.io/research' },
};

export default function Research() {
  return (
    <>
      <SiteHeader current="research" />
      <main id="main" className="container">
        <div className="research-intro">
          <h1>Research Interests</h1>
          <p>{profile.interests}</p>
          <p>{profile.motivation}</p>
        </div>
        <div className="topic-links" aria-label="Research topics">
          {researchGroups.map((group) => (
            <a key={group.id} href={`#${group.id}`}>{group.shortTitle}</a>
          ))}
        </div>
        {researchGroups.map((group, index) => (
          <section className="research-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}>
            <div>
              <span className="topic-number" aria-hidden="true">0{index + 1}</span>
              <h2 id={`${group.id}-heading`}>{group.title}</h2>
              <p className="topic-description">{group.description}</p>
            </div>
            <ol className="paper-list">
              {group.papers.map((paper) => (
                <li className="paper" id={paper.id} key={paper.id}>
                  <article aria-labelledby={`${paper.id}-title`}>
                    <h3 id={`${paper.id}-title`}><a href={paper.href}>{paper.title}</a></h3>
                    <p className="authors">
                      {paper.authors.map((author, authorIndex) => (
                        <Fragment key={author}>
                          {authorIndex > 0 && ', '}
                          {author.startsWith('W. Yu') ? <strong>{author}</strong> : author}
                        </Fragment>
                      ))}
                    </p>
                    <p className="venue">{paper.venue}</p>
                    {paper.summary && <p className="paper-summary">{paper.summary}</p>}
                    {paper.note && <p className="paper-note">{paper.note}</p>}
                  </article>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
