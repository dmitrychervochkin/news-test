export const addNewPost = async (data: any) => {
    console.log(data)
    const newPost = await fetch(
        "https://server-production-61e7.up.railway.app/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
                title: data.title || "Название поста",
                description: data.description || "Описание поста",
                author: data.author || "Неизвестный автор",
                url: data.url,
                likes: 0,
            }),
        }
    ).then((data) => data.json())

    return newPost
}
