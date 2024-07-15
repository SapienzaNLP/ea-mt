import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Task Documentation',
    image: "img/documents.png",
    description: (
      <>
        Read the task description, download the data, and learn how to submit your results!
      </>
    ),
    link: '/docs/task/introduction'
  },
  {
    title: 'News & Updates',
    image: "img/newspaper.png",
    description: (
      <>
        Stay up-to-date with the latest news and updates about the task!
      </>
    ),
    link: '/news'
  },
  {
    title: 'Stay Connected',
    image: "img/network.png",
    description: (
      <>
        Join the community and stay connected with other participants!
      </>
    ),
    link: 'https://groups.google.com/a/uniroma1.it/g/semeval-2025-task-2-ea-mt'
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--4')} style={{margin: "2rem 0rem"}}>
      <div className="text--center">
        <img src={image} alt={title} style={{width: "30%", height: "30%", margin: "1rem"}} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <Link
          className={clsx("button button--secondary", styles.taskButton)}
          to={link}>
          🔍 Read More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container" style={{marginTop: "-2rem"}}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <br/>
        <hr/>
      </div>
    </section>
  );
}
