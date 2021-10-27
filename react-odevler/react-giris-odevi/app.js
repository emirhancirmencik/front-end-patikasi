import axios from "axios";

async function getData(number) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`
  );

  let merged = { ...user, posts: posts };
  return merged;
}

export default getData;
