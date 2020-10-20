const GET_POSTS = 'https://jsonplaceholder.typicode.com';


export async function getPosts() {
  const response = await fetch(`${GET_POSTS}/posts`);
  const json = await response.json();
  const date = await json;

  return date;
}

