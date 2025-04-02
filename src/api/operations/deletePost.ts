export const deletePost = async (id: number) => {
    await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
    })

    return true
}
