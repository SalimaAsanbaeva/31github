/* External dependencies */
import React from 'react';

/* Local dependencies */
import PostItem from './PostItem';

export default function PostList({ posts, title, remove }) {

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found!</h1>;
  }
  
  return (
    <div> <h1 style={{ textAlign: "center" }}>
        {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
          )}
      </div>
  )
}
