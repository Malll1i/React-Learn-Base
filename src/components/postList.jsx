import React from "react";
import PostItem from "./postItem";

const PostList = ({post}) => {
 
   return(
    <div>
       {post.map(post =>
        <div>
          <PostItem post = {post} key={post.id}/>
        </div>
        )}
    </div>
   )
}

export default PostList