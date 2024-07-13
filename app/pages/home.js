import Image from "next/image";
import styles from './styles/home.module.css';
export default function Home() {
    return (
     <section className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Begin Your Journey with Us</h1>
        <p className={styles.p}>Our dedicated team of talented designers is committed to bringing your ideas to life with precision and creativity.</p>
        <button className={styles.ctaButton}>Contact Us</button>
      </div>
      <div className={styles.imageContainer}>
            <Image
              src="img/pen_tool.svg"
              alt="Logo"
              className={styles.logo}
              width={200}
              height={24}
              priority
            />
      </div>
    </section>
    );
  }