export const deletePost = async (id: number) => {
    await fetch(`https://server-production-61e7.up.railway.app/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
    })

    return true
}
