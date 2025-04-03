export const getPosts = async () => {
    const posts = await fetch('/api/posts').then((data) =>
        data.json()
    )

    return posts.reverse()
}
