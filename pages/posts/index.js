import axios from "axios";
import React from "react";
import AllPosts from "../../components/AllPosts";
import PostPreview from "../../components/PostPreview";



function Posts({posts}){

    return <>
        All posts

        <AllPosts posts={posts.data}/>
    </>
}

export default Posts

export async function getServerSideProps(){
    const postRes = await axios.get("http://localhost:1337/api/blogs");
  
    return {
      props:{
        posts: postRes.data
      },
    };
  }