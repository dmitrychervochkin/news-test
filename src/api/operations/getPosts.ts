export const getPosts = async () => {
    const posts = await fetch(
        "https://server-production-61e7.up.railway.app/posts",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
        }
    ).then((data) => data.json())

    return posts.reverse()
}
