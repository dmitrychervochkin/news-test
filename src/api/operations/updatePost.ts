export const updatePost = async (id: number, data: any) => {
    console.log(data)
    const updatedPost = await fetch(
        `https://server-production-61e7.up.railway.app/posts/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(data),
        }
    ).then((data) => data.json())

    return updatedPost
}
