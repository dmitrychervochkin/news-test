import { useEffect, useState } from "react"
import { PostCard } from "../postCard/PostCard"
import "./main.style.scss"
import { server } from "../../api"
import { AddNewPost } from "../postCard/components"

export interface PostType {
    id: number
    title: string
    description: string
    author: string
    url: string | undefined
    likes: number
    setRefresh: (p: boolean | ((p: boolean) => boolean)) => void
}

export const Main = () => {
    const [posts, setPosts] = useState([])
    const [refresh, setRefresh] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)

    useEffect(() => {
        server.getPosts().then((res) => {
            setPosts(res)
            localStorage.setItem("posts", JSON.stringify(res))
        })
    }, [refresh])

    return (
        <main className="main">
            <div className="main-container">
                <button
                    className="add-new-post-btn"
                    onClick={() => setIsAdd((p) => !p)}
                >
                    <div>{isAdd ? "Скрыть" : "Предложить новость +"}</div>
                </button>
                {isAdd && <AddNewPost setRefresh={setRefresh} setIsAdd={setIsAdd}/>}
                {posts.map(({ id, title, description, author, url, likes }) => (
                    <PostCard
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        author={author}
                        url={url}
                        likes={likes}
                        setRefresh={setRefresh}
                    />
                ))}
            </div>
        </main>
    )
}
