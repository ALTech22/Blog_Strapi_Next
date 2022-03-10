import axios from "axios";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";

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
        
       
            console.log(data.Media[0])
            //await axios.post('/', {data, token})
           
            //router.push('/')
        
    }
    

    return(
        <div className="container">
            <h1> pagina para testes </h1>
            <form>
                <input type="text" placeholder="title" name="Title"
                {...register('Title')}
                ></input>
                <input type="text" placeholder="description" name="Description"
                    {...register('Description')}
                ></input>
                <textarea name="Content"
                    rows="10" cols="30"
                    {...register('Content')}
                ></textarea>

                <input type="file" accept="image/*" name="Media" 
                 {...register('Media')}></input>
                <button onClick={handleSubmit(submit)}>submit</button>
            </form>
        </div>
    )
}

export default NewPost