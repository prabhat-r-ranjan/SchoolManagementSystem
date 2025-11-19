// /app/blog/page.jsx
import Link from 'next/link';
import { blogPosts } from '../../lib/blogData';
import styles from './BlogPage.module.css';
import Header from '../components/Header/PramrixHeader'; 
import Footer from '../components/Footer/Footer'; // Make sure path is correct

export default function BlogPage() {
  return (
    <>
      {/* Add Header at the top */}
      <Header />
      
      <div className={styles.blogPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <span>Insights & Strategies</span>
              </div>
              <h1 className={styles.heroTitle}>
                Growth <span className={styles.highlight}>Insights</span> &<br />
                Marketing <span className={styles.highlight}>Strategies</span>
              </h1>
              <p className={styles.heroDescription}>
                Expert advice and proven strategies to help educational institutions and businesses 
                achieve sustainable growth through digital marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className={styles.blogSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Latest Articles</h2>
              <p>Fresh perspectives on education marketing and growth strategies</p>
            </div>
            
            <div className={styles.blogGrid}>
              {blogPosts.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <Link href={`/blog/${post.slug}`} className={styles.blogLink}>
                    <div className={styles.categoryBadge}>
                      {post.category}
                    </div>
                    
                    <div className={styles.imageContainer}>
                      <div className={styles.imagePlaceholder}>
                        <span>📚</span>
                      </div>
                    </div>

                    <div className={styles.blogContent}>
                      <h3 className={styles.blogTitle}>{post.title}</h3>
                      <p className={styles.blogExcerpt}>{post.excerpt}</p>
                      
                      <div className={styles.blogMeta}>
                        <div className={styles.author}>
                          <span className={styles.authorName}>
                            {post.author?.name || 'Pramrix Team'}
                          </span>
                          <span className={styles.authorRole}>
                            {post.author?.role || 'Marketing Expert'}
                          </span>
                        </div>
                        <div className={styles.metaInfo}>
                          <span className={styles.readTime}>{post.readTime}</span>
                          <span className={styles.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.readMore}>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Growth Strategy?</h2>
              <p>Let's discuss how we can help your institution achieve remarkable results</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Start Your Journey
                </Link>
                <Link href="/services" className={styles.secondaryBtn}>
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}