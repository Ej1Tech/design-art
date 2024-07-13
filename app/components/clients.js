import styles from '../clients.module.css';

const Clients = () => {
  return (
    <section className={styles.clients}>
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className={styles.logos}>
        <img src="/path-to-logo1.png" alt="Client Logo 1" className={styles.logo} />
        <img src="/path-to-logo2.png" alt="Client Logo 2" className={styles.logo} />
        <img src="/path-to-logo3.png" alt="Client Logo 3" className={styles.logo} />
        <img src="/path-to-logo4.png" alt="Client Logo 4" className={styles.logo} />
        <img src="/path-to-logo5.png" alt="Client Logo 5" className={styles.logo} />
      </div>
    </section>
  );
};

export default Clients;