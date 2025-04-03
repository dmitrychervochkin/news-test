export const getPosts = async () => {
    const posts = await fetch("http://server-production-61e7.up.railway.app/posts", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
    }).then((data) =>
        data.json()
    )

    return posts.reverse()
}
