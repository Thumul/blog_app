import './HomePage.scss';

import React, { useState } from "react";

import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import Logout from "./user/Logout";

const defaultPosts:{
    author:string;
    title:string;
    content:string;
  }[] = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
   ];

   type HomePageProps = {
    user: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
   }

export default function HomePage (props:HomePageProps) {

    const [posts, setPosts] = useState(defaultPosts);

    return(
        <div className="homepage">
            <Logout user={props.user} setStatus={props.setStatus} />
            <hr className='homepage__line'></hr>
            <CreatePost user={props.user} posts={posts} setPosts={setPosts} />
            <PostList posts={posts}/>
        </div>
    )
}