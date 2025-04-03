export const getPosts = async () => {
    const posts = await fetch("http://server-production-61e7.up.railway.app/posts", {
  method: 'OPTIONS',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
}).then((data) =>
        data.json()
    )

    return posts.reverse()
}
