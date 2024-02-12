import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Iamge"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Amy Jackson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nihil
          dolorum sit? Aperiam voluptates laudantium maxime aliquam, aspernatur
          magnam autem?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in
          adipisci ad, voluptate blanditiis totam vero et necessitatibus aperiam
          amet, facilis nam voluptatem molestias iusto? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quidem natus aspernatur ex ullam
          totam possimus harum dolore aliquam quam, animi maxime quas amet at.
          Cum id nulla assumenda expedita eaque vel consequuntur excepturi, et,
          minima nam enim consectetur rem laboriosam ipsum blanditiis
          voluptatibus totam quae! Dolor perspiciatis cumque quae error, a
          sapiente quibusdam ex voluptatem optio et impedit omnis repellat
          quidem nesciunt velit fugiat mollitia nam minus asperiores
          consequatur, tempora distinctio vitae consectetur. Expedita quasi
          neque perferendis aliquid quo voluptas, ex consequatur et nobis. Vero,
          repellendus officia libero maxime excepturi nobis atque dolor impedit
          magni quis explicabo molestiae neque illum.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste
          cupiditate est culpa quos facilis id fugit minima. Obcaecati
          asperiores iure dolores commodi, doloremque architecto iusto voluptas
          praesentium expedita autem nesciunt sed amet modi necessitatibus?
          Nihil, nesciunt laborum molestias dolor officia aut maiores veritatis
          eius.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptate voluptatibus ipsum.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
