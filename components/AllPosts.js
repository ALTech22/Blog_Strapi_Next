import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function AllPosts({posts}){

    function renderPostPreview(){
        console.log(posts)
        return posts.map((post) => {

            return <PostPreview post={post} key={post.id}/>
        })
    }


    return(
        <>
            <h2>latest post</h2>
            {renderPostPreview()}
        </>
    )
}

export default AllPosts;
