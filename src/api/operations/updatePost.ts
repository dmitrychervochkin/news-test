export const updatePost = async (id: number, data: any) => {
    console.log(data)
    const updatedPost = await fetch(`http://server-production-61e7.up.railway.app/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    }).then((data) => data.json())

    return updatedPost
}
