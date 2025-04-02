import "../postCard.style.scss"

type ImageType = {
    url: string | undefined
}

export const Image = ({ url }: ImageType) => {
    return (
        <div className="img-wrapper">
            {url ? <img className="post-img" src={url} /> : null}
        </div>
    )
}
