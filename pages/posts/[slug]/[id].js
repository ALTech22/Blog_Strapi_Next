/* eslint-disable react/jsx-no-comment-textnodes */
import axios from "axios";
import MarkdownIt from "markdown-it/lib";
import { useRouter } from "next/router";
import Image from "next/image";
import { parseCookies } from "nookies";
import React from "react";
import Link from "next/link";

function PostPage({post}){
    const md = MarkdownIt()
    const mdTranslated = md.render(post.attributes.Content)
    const cookies = parseCookies();
    const router = useRouter()

    const token = cookies.strapinextapp_token;
    async function deletePost(){
        const response = await fetch('/api/post',{
            method: 'DELETE',
            body: JSON.stringify({
                id: post.id,
                token
          }),
          headers: {
             'Content-Type': 'application/json' 
         }
     })
     router.push('/')

     const data = await response.json()
     console.log(data)

     

    }

    function loadImage(){
        
        if(post.attributes.MediaHash != null && post.attributes.MediaHash != undefined && post.attributes.MediaHash != '')
            return <Image width={'200'} height={'200'} alt={()=>{return 'teste'}} src={post.attributes.MediaHash} ></Image>
    }

    return(<>
    <div className="container">
        <nav className="NavBar">
            <Link href={`/post/${post.id}`} >
                <a className="title"> editar postagem </a>
            </Link>    
        </nav>
    </div>
        <article>
            <div className="button" onClick={deletePost}>Apagar este post </div>
            <header>
                <h1>Author: {post.attributes.Author}</h1>
                {console.log(post.attributes)}
                <h2> {post.attributes.Title} </h2>
                <h3> {post.attributes.Description} </h3>
                {loadImage()}
            </header>
            <hr/>
            <section dangerouslySetInnerHTML={{ __html: mdTranslated }}/>
        </article>
        </>)
}

export default PostPage

export async function getStaticProps({params}){
    const postRes = await (await axios.get(`http://localhost:1337/api/blogs/${params.id}`)).data
    return {
        props:{
            post: postRes.data
        }
    }
}

export async function getStaticPaths(){
    const postRes = await (await axios.get('http://localhost:1337/api/blogs')).data
    const paths = postRes.data.map((post) => {
        return {params: {
            slug: post.attributes.Slug,
            id: post.id.toString()
        }}
    })

    return {
        paths,
        fallback: false
    }

}