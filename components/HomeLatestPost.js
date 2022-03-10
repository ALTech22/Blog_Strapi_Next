import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function HomeLatestPost({posts}){

    const [latestPost, setLatestPost] = useState([]);
    //console.log(posts[0], typeof posts[0])

    //console.log(allPosts, typeof allPosts)
    useEffect(()=>{
        setLatestPost(posts.slice(0,5))
    }, [posts]);
    
    //console.log('slice')
    //console.log(posts.slice(0,5))

    function renderPostPreview(){
        let teste = []
        console.log(posts.length)
        let lastPosts = 0
        if(posts.length > 5)
            lastPosts = posts.slice(posts.length-5,posts.length)
        else
            lastPosts = posts.slice(0,5)
        return lastPosts.map((post) => {
            //console.log(post)
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

export default HomeLatestPost;
