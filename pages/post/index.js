import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar";

function NewPost(){
    /*var [Title, setTitle] = useState('')
    var [Description, setDescription] = useState('')
    var [Content, setContent] = useState('')*/
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const cookies =  parseCookies();
    const token =  cookies.strapinextapp_token;
    console.log('token:', token)

    async function submit(data){
        
        if(typeof token == 'undefined'){
            alert('not logged')
            return;
        }else{
            console.log(data.MediaHash.search('http'))
            
            if(data.MediaHash.search('http'))
                data.MediaHash = ''

            data.Author = cookies.strapinextapp_username
            console.log(data)
            
            await axios.post('/api/post', {data, token})
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

export default NewPost