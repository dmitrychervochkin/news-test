import { useState } from "react"
import { PostType } from "../main/Main"
import "./postCard.style.scss"
import { Image } from "./components"
import { server } from "../../api"

export const PostCard = ({
    id,
    title,
    description,
    author,
    url,
    likes,
    setRefresh,
}: PostType) => {
    const [isOpen, setIsOpen] = useState(false)

    const openDescriptionHandler = () => {
        setIsOpen((p) => !p)
    }
    const onLikeClicked = () => {
        server.updatePost(id, { likes: likes + 1 }).finally(() => {
            setRefresh((p) => !p)
        })
    }
    const onDeleteClicked = () => {
        server.deletePost(id).finally(() => {
            setRefresh((p) => !p)
        })
    }

    return (
        <div className="post-card">
            <div className="delete-btn" onClick={onDeleteClicked}>
                Удалить
            </div>
            <Image url={url} />
            <h3 className="post-title">{title}</h3>
            <div
                style={{
                    overflow: isOpen ? "visible" : "hidden",
                    whiteSpace: isOpen ? "wrap" : "nowrap",
                }}
                className="post-description"
            >
                {description}
            </div>
            <footer className="post-footer">
                <div className="post-author">Автор: {author}</div>
                <div className="more-info-btn" onClick={openDescriptionHandler}>
                    {isOpen ? "Скрыть" : "Показать"}
                </div>
            </footer>
            <div className="post-actions">
                <div className="likes-container">
                    <img
                        className="post-icon-btn"
                        src="./src/assets/like.png"
                        onClick={onLikeClicked}
                    />
                    {likes}
                </div>
                <img className="post-icon-btn" src="./src/assets/comment.png" />
            </div>
        </div>
    )
}
