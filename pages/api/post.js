import axios from "axios"
import { parseCookies } from "nookies"

export default function Handler(req, res){
    const METHOD = req.method
    switch(METHOD){
        case "POST":
            try{
                console.log(req.body)
                const {Title, Description, Content, Slug, MediaHash, Author} = req.body.data
    
                const TOKEN = req.body.token
    
                const post = {data: {
                    Title,
                    Description,
                    Content,
                    Slug,
                    MediaHash,
                    Author
                }}
                //console.log(post)
                axios.post('http://localhost:1337/api/blogs', post,{
                    headers:{
                        'Authorization': 'Bearer '+TOKEN
                    }
                })
                return res.redirect('/')
          }catch(err){
              res.send(err)
          }
          
        break;

        case "DELETE":
            try{
                const {id, token} = req.body
                axios.delete(`http://localhost:1337/api/blogs/${id}`,{
                    headers:{
                        'Authorization': 'Bearer '+token
                    }
                })
                return res.redirect('http://localhost:3000/')
            }catch(err){
                res.send({error: 'impossivel remover'})
            }
        break;

        case "PUT":
            try{
                console.log('body: ',req.body)
                const {Title, Description, Content, Slug, MediaHash} = req.body.data
    
                const TOKEN = req.body.token
                const ID = req.body.id
    
                const put = {data: {
                    Title,
                    Description,
                    Content,
                    Slug,
                    MediaHash
                }}
                console.log(put)
                axios.put(`http://localhost:1337/api/blogs/${ID}`, put,{
                    headers:{
                        'Authorization': 'Bearer '+TOKEN
                    }
                })
                return res.redirect('/')
          }catch(err){
              res.send(err)
          }
        break;
    }
}