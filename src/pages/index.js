import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Organizers from '@site/src/components/Organizers';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/task/introduction">
            Task Introduction - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


function TaskBanner() {
  return (
    <section className={clsx(styles.taskBanner)}>
      <div className="container">
        <h2 className={styles.taskTitle}>Welcome to the EA-MT Shared Task!</h2>
        {/* <h3 className={styles.taskSubtitle}>SemEval-2025 Task 2: EA-MT</h3> */}

        <div className={styles.buttonRow}>
          <Link
            className={clsx("button button--primary button--lg", styles.taskButton)}
            to="news/welcome">
            🚀 Task Announcement
          </Link>
          <Link
            className={clsx("button button--primary button--lg", styles.taskButton)}
            to="/docs/task/introduction">
            😎 Get Started
          </Link>
          <Link
            className={clsx("button button--primary button--lg", styles.taskButton)}
            to="/docs/task/important_dates">
            📅 Important Dates
          </Link>
        </div>

        <div className="container">
          <div className="row" style={{alignItems: "center", justifyContent: "center"}}>
            <div className={clsx('col col--5', styles.taskBox)}>
              <h3 className={styles.taskSubtitle}>The Goal</h3>
              <p className={styles.taskDescription}>
                Join us in promoting research on <b>machine translation systems and their capability to translate text containing named entities</b>.
              </p>
            </div>
            <div className={clsx('col col--5', styles.taskBox)}>
              <h3 className={styles.taskSubtitle}>SemEval-2025</h3>
              <p className={styles.taskDescription}>
                The EA-MT task is organized as part of the <a href="https://semeval.github.io/SemEval2025/" target="_blank"><b>International Workshop on Semantic Evaluation</b></a> (SemEval-2025).
              </p>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </section>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to the official web page for our SemEval-2025 shared task: Entity-Aware Machine Translation!">
      <HomepageHeader />
      <main>
        <TaskBanner />
        <HomepageFeatures />
        <Organizers />
      </main>
    </Layout>
  );
}
