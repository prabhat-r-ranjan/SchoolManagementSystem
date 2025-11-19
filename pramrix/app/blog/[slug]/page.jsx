// /app/blog/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../lib/blogData';
//import styles from './BlogPost.module.css';
import styles from '../../blog/BlogPage.module.css'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.blogPost}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
          <div className={styles.categoryBadge}>
            {post.category}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <div className={styles.author}>
              {/* SAFE ACCESS here too */}
              <span className={styles.authorName}>
                {post.author?.name || 'Pramrix Team'}
              </span>
              <span className={styles.authorRole}>
                {post.author?.role || 'Marketing Expert'}
              </span>
            </div>
            <div className={styles.metaInfo}>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imagePlaceholder}>
            <span>📚</span>
          </div>
          <div className={styles.textContent}>
            <p>This is a sample blog post about: {post.title}</p>
            <p>{post.excerpt}</p>
            <p>Full blog content would go here with detailed information, examples, and strategies.</p>
          </div>
        </div>
      </div>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Implement These Strategies?</h2>
          <p>Let's work together to achieve similar results for your institution</p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Growth Journey
          </Link>
        </div>
      </section>
    </article>
  );
}