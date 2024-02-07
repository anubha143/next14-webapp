import Image from "next/image";
import styles from "./about.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1682686581797-21ec383ead02?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default About;
