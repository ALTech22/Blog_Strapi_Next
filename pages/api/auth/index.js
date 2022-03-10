import axios from "axios";
import { setCookie } from "nookies";

export default function authHandler(req, res){
    /*
    if(req.method != "POST")
        return res.status(405).send("method not allowed")
    const data = req.body;  
            try{
            let test = 
           /* fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then((res) => console.log(res))
        }catch(err){
            console.log(err)
        }
    */
}