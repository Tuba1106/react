import axios from "../../axios";
import { useEffect, useState } from "react";
import { Posts } from "../posts/posts";

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
