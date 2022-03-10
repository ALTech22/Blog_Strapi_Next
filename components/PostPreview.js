import Link from "next/link";
import React from "react";

function PostPreview({post}){

    return( 
    <Link href={`posts/${post.attributes.Slug}/${post.id}`}>
        <div className="post">

            <h2> {post.attributes.Title} </h2>
            <hr></hr>
            <h4> {post.attributes.Description} </h4>
            
    
        </div>
    </Link>
    )
}


export default PostPreview  