import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   // no-cache is used if we do not want to cache data
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-cache",
//     next: { revalidate: 3600 }, //this will keep fetching fresh data after an interval of 1 hr
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const Blog = async () => {
  // const posts = await getData();
  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
