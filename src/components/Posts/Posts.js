import React, { useState, useEffect, Suspense, useRef } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
const Post = React.lazy(() => import("../Post/Post"));

const Posts = () => {
  const [posts, setposts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const postsStructure = [10, 6];
  let [totalPost, postsPerPage] = postsStructure;

  const ref = useRef(null);
  const fetchPosts = () => {
    setLoading(true);
    axios
      .get("https://dummy-json.mock.beeceptor.com/posts")
      .then((response) => {
        setposts(response.data.slice(0, postsPerPage));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    axios
      .get("https://dummy-json.mock.beeceptor.com/posts")
      .then((response) => {
        setposts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingMore(false);
      });
  };

  const checkVisibility = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInView && posts.length < 9) {
        loadMore();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
    window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return isLoading ? (
    <Spinner className="p-4" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div>
      <h1 className="p-4 ml-2">Posts</h1>
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
          {posts.map((post, index) => {
            return <Post key={post.id} post={post} />;
          })}
        </Suspense>
      </ul>

      {isLoadingMore && totalPost !== posts.length ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null}
      <div ref={ref} style={{ height: "100px" }}></div>
    </div>
  );
};

export default Posts;