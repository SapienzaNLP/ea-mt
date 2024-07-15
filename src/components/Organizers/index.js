import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const OrganizerList = [
  {
    name: 'Sapienza NLP',
    logo: "img/sapienza_nlp_logo_square.png",
    link: 'https://nlp.uniroma1.it'
  },
  {
    name: 'Apple',
    logo: "img/apple_logo.png",
    link: 'https://machinelearning.apple.com/research'
  },
];

function Organizer({name, logo, link}) {
  return (
    <div className={clsx('col col--3')} style={{marginTop: "1rem"}}>
      <div className="text--center">
        <img src={logo} alt={name} className={clsx(styles.organizerLogo)} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{name}</Heading>
        <a href={link}>Website</a>
      </div>
    </div>
  );
}

export default function Organizers() {
  return (
    <section className={styles.organizers}>
      <div className="container" style={{marginTop: "-2rem"}}>
      <h2 className={styles.organizerTitle}>Task Organizers</h2>
        <div className="row" style={{justifyContent: "center"}}>
          {OrganizerList.map((props, idx) => (
            <Organizer key={idx} {...props} />
          ))}
        </div>
      <br />
      <hr />
      </div>
    </section>
  );
}
