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
    const [isEdit, setIsEdit] = useState(false)
    const [editPost, setEditPost] = useState({
        id,
        title,
        description,
        author,
        url,
        likes,
    })

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
    const onChangeInput = (name: string, e: any) => {
        setEditPost({ ...editPost, [name]: e.target.value })
    }
    const onEditClicked = () => {
        setIsEdit(true)
    }
    const onSaveClicked = () => {
        server.updatePost(id, editPost).finally(() => {
            setRefresh((p) => !p)
            setIsEdit(false)
        })
    }

    return (
        <div className="post-card">
            <div className="delete-btn" onClick={onDeleteClicked}>
                Удалить
            </div>
            {isEdit ? (
                <input
                    placeholder="Введите адрес изображения..."
                    className="add-new-post-input"
                    style={{ width: "100%" }}
                    value={editPost.url}
                    onChange={(e) => onChangeInput("url", e)}
                />
            ) : (
                <Image url={url} />
            )}

            <h3 className="post-title">
                {isEdit ? (
                    <input
                        placeholder="Введите заголовок..."
                        className="add-new-post-input"
                        value={editPost.title}
                        onChange={(e) => onChangeInput("title", e)}
                    />
                ) : (
                    title
                )}
                {isEdit ? (
                    <img
                        className="post-icon-btn"
                        src="/save.png"
                        onClick={onSaveClicked}
                    />
                ) : (
                    <img
                        className="post-icon-btn"
                        src="/edit.png"
                        onClick={onEditClicked}
                    />
                )}
            </h3>
            <div
                style={{
                    overflow: isOpen ? "visible" : "hidden",
                    whiteSpace: isOpen ? "wrap" : "nowrap",
                }}
                className="post-description"
            >
                {isEdit ? (
                    <textarea
                        placeholder="Введите описание..."
                        className="add-new-post-area"
                        value={editPost.description}
                        onChange={(e) => onChangeInput("description", e)}
                    />
                ) : (
                    description
                )}
            </div>
            <footer className="post-footer">
                <div className="post-author">
                    Автор:{" "}
                    {isEdit ? (
                        <input
                            placeholder="Введите имя автора..."
                            className="add-new-post-input"
                            value={editPost.author}
                            onChange={(e) => onChangeInput("author", e)}
                        />
                    ) : (
                        author
                    )}
                </div>
                {!isEdit && (
                    <div
                        className="more-info-btn"
                        onClick={openDescriptionHandler}
                    >
                        {isOpen ? "Скрыть" : "Показать"}
                    </div>
                )}
            </footer>
            <div className="post-actions">
                <div className="likes-container">
                    <img
                        className="post-icon-btn"
                        src="/like.png"
                        onClick={onLikeClicked}
                    />
                    {likes}
                </div>
                <img className="post-icon-btn" src="/comment.png" />
            </div>
        </div>
    )
}
