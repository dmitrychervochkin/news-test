import { useState } from "react"
import "../postCard.style.scss"
import { server } from "../../../api"

interface addNewPostInterface {
    setRefresh: (p: boolean | ((p: boolean) => boolean)) => void
    setIsAdd: (p: boolean | ((p: boolean) => boolean)) => void
}

export const AddNewPost = ({ setRefresh, setIsAdd }: addNewPostInterface) => {
    const [newPostData, setNewPostData] = useState({})

    const onInputChange = (name: string, e: any) => {
        setNewPostData({ ...newPostData, [name]: e.target.value })
    }

    const onSubmit = () => {
        server.addNewPost(newPostData).finally(() => {
            setRefresh((p: boolean) => !p)
            setIsAdd(false)
        })
    }
    return (
        <div className="add-new-post">
            <div className="input-container">
                <label>Заголовок</label>
                <input
                    className="add-new-post-input"
                    placeholder="Введите заголовок поста..."
                    onChange={(e) => onInputChange("title", e)}
                />
            </div>
            <div className="input-container">
                <label>Описание</label>
                <input
                    className="add-new-post-input"
                    placeholder="Введите описание поста..."
                    onChange={(e) => onInputChange("description", e)}
                />
            </div>
            <div className="input-container">
                <label>Автор</label>
                <input
                    className="add-new-post-input"
                    placeholder="Введите имя автора..."
                    onChange={(e) => onInputChange("author", e)}
                />
            </div>
            <div className="input-container">
                <label>Ссылка на картинку</label>
                <input
                    className="add-new-post-input"
                    placeholder="Укажите ссылку на изображение..."
                    onChange={(e) => onInputChange("url", e)}
                />
            </div>
            <button className="save-new-post-btn" onClick={onSubmit}>
                Опубликовать
            </button>
        </div>
    )
}
