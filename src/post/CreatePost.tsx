import React, { useState } from "react";

type CreatePosrProps = {
  user: string;
  posts: {
    author: string;
    title: string;
    content: string;
  }[];
  setPosts: React.Dispatch<
    React.SetStateAction<
      {
        author: string;
        title: string;
        content: string;
      }[]
    >
  >;
};

export default function CreatePost(props: CreatePosrProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(evt: React.FormEvent<HTMLInputElement>) {
    setTitle(evt.currentTarget.value);
  }

  function handleContent(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(evt.currentTarget.value);
  }

  function handleCreate() {
    const newPost = { author: props.user, title, content };
    props.setPosts([newPost, ...props.posts]);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate();
      }}
      className="create-post-form"
    >
      <div className="create-post-form__author">
        Author: <b>{props.user}</b>
      </div>
      <div className="create-post-form__title">
        <label htmlFor="create-title">Title:</label>
        <input
          type="Text"
          name="create-title"
          id="create-title"
          className="create-post-form__title--input"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input
        type="submit"
        value="Create"
        className="create-post-form__create-btn"
      />
    </form>
  );
}
