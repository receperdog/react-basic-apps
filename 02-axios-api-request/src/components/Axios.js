import react, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [posts, setPosts] = useState();
  const getPostToApi = async () => {
    try {
      await axios
        .get("http://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={getPostToApi}>Click Me!</button>
      <p>{JSON.stringify(posts)}</p>
    </div>
  );
};
export default Axios;
