import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React from "react";
import { useForm } from "react-hook-form";


function EditPost({id}){
    /*var [Title, setTitle] = useState('')
    var [Description, setDescription] = useState('')
    var [Content, setContent] = useState('')*/
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const cookies =  parseCookies();
    const token =  cookies.strapinextapp_token;
    console.log('token:', token)
    console.log(id)
    async function submit(data){
        
        if(typeof token == 'undefined'){
            alert('not logged')
            return;
        }else{
            console.log(data)
            await axios.put('/api/post', {data, token, id})
            /*
            const response = await fetch('/api/post',{
                method: 'POST',
                body: JSON.stringify({
                    data:{
                        Title,
                        Description,
                        Content
                    }
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                }
            })*/
            router.push('/')
        }
    }
    

    return(
        <div className="container">
            <form>
                <input type="text" placeholder="title" name="Title"
                {...register('Title')}
                ></input>
                <input type="text" placeholder="description" name="Description"
                    {...register('Description')}
                ></input>
                <input type="text" placeholder="slug" name="Slug"
                    {...register('Slug')}
                ></input>
                <input type="text" placeholder="Image URL" name="MediaHash"
                    {...register('MediaHash')}
                ></input>
                <textarea name="Content"
                    rows="10" cols="30"
                    {...register('Content')}
                ></textarea>
                {/*
                <input type="file" accept="image/*" name="Media" 
                    {...register('Media')}
                ></input>
                */}
                <button onClick={handleSubmit(submit)}>submit</button>
            </form>
        </div>
    )
}

export default EditPost

export async function getStaticProps({params}){
    const postRes = await (await axios.get(`http://localhost:1337/api/blogs/${params.id}`)).data
    return {
        props:{
            id: postRes.data.id
        }
    }
}

export async function getStaticPaths(){
    const postRes = await (await axios.get('http://localhost:1337/api/blogs')).data
    const paths = postRes.data.map((post) => {
        return {params: {
            id: post.id.toString()
        }}
    })

    return {
        paths,
        fallback: false
    }

}