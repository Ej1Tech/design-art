
import Image from "next/image";
import styles from "./styles/about.module.css";
export default function About(){
    return (
        <section className={styles.about}>
            <div className={styles.imageContainer}>
                <Image
                    src="img/pen_tool.svg"
                    alt="Logo"
                    className={styles.image}
                    width={200}
                    height={24}
                    priority
            />
            </div>
            <div className={styles.content}>
                <h2 className={styles.h1}>About Our Company</h2>
            <p className={styles.p}>Welcome to <span className={styles.highlight}>Samemly</span>, where creativity meets innovation. We are a dedicated team of professional designers committed to providing top-notch design services that cater to your every need. With expertise spanning from logo design and visual identity to motion graphics and social media content, we pride ourselves on delivering exceptional quality and creative solutions. Our mission is to help brands stand out and connect with their audience through visually stunning and impactful designs. Whether you're a start-up looking to establish your brand or an established company aiming to refresh your image, <span className={styles.highlight}>Samemly</span> is here to bring your vision to life. Join us, and let's create something extraordinary together.</p>
      </div>
    </section>
    )
}