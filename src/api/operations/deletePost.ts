export const deletePost = async (id: number) => {
    await fetch(`http://server-production-61e7.up.railway.app/posts/${id}`, {
        method: "DELETE",
    })

    return true
}
