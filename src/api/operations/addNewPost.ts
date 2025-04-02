export const addNewPost = async (data: any) => {
    console.log(data)
    const newPost = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            title: data.title || "Название поста",
            description: data.description || "Описание поста",
            author: data.author || "Неизвестный автор",
            url: data.url,
            likes: 0,
        }),
    }).then((data) => data.json())

    return newPost
}
