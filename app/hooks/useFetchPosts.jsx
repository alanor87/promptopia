
import { useState } from "react";

const useFetchPosts = (setPostsCb, userId = "") => {
  const [postsAreFetched, setPostsAreFetched] = useState(false);

  if (postsAreFetched) return;

  fetch(userId ? `/api/users${userId}/posts` : "/api/prompt")
    .then((data) => data.json())
    .then((parsedData) => {
      setPostsCb(parsedData);
    })
    .catch((e) => {
      setPostsCb([]);
    });
  setPostsAreFetched(true);
};

export { useFetchPosts };
