import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. We are world's
          special best team consulting and finance olution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>243K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5K+</h1>
            <p>Services and plugin</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Page" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
