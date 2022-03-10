import axios from "axios"
import { parseCookies } from "nookies"
import { useForm } from "react-hook-form"

function NewImage(){

    const {register, handleSubmit} = useForm()

    async function submit(d){
        const cookies = await parseCookies()
        const token = await cookies.strapinextapp_token
        const data = await d.media
        console.log(data, token)
        const request = new XMLHttpRequest();
        axios.post('http://localhost:1337/uploads', data, {
            headers:{'Authorization': 'Bearer ' + token}
        })/*
        request.open('POST', 'http://localhost:1337/uploads')
        request.setRequestHeader('Authorization', 'Bearer ' + token)
        request.send(data)*/
    }

    return(
        <>
            <div className="container">
                <form>
                <input type="file" accept="image/*" name="Media"
                    {...register('media')}
                ></input>
                    <button type="submit" onClick={handleSubmit(submit)}>submit</button>
                </form>
            </div>
            
        </>
    )

}   

export default NewImage