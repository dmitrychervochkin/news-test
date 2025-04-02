export const getPosts = async () => {
    const posts = await fetch("http://server-production-61e7.up.railway.app/posts").then((data) =>
        data.json()
    )

    return posts.reverse()
}
