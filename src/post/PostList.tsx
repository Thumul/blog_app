import Post from "./Post";


type PostListProps = {
    posts:{
        author:string;
        title:string;
        content:string;
    }[];
}

export default function PostList (props:PostListProps) {
    return(
        <div className="post-list">
            {props.posts.map((post, i) => (
                <Post author={post.author} title={post.title} content={post.content} key={"post-" + i} />
            ))}
        </div>
    );
}