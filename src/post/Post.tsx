

type PostProps = {
    title:string;
    content:string;
    author:string;
}

export default function Post (props:PostProps) {
    return(
        <div className="post">
            <p className="post__title">{props.title}</p>
            <div className="post__content">
                <p className="post__content--text">{props.content}</p>
            </div>
            <p className="post__author">{props.author}</p>
        </div>
    )
}