import Image from "next/image"
import { useState } from "react/cjs/react.production.min";
import Alert from "./Alert";


function ImagePreview({image}){

    


    function alerta(){
        if(alert){
            setTimeout(()=>setAlert(false), 5000)
            return <Alert message={ `Default height:${image.height} Default width:${image.width} 
            Path: http://localhost:1337/uploads/${image.hash}${image.ext}`}/>

            
        }
    }

    return(
        <div className="container">
            {console.log(image)}
            <Image src={`http://localhost:1337/uploads/${image.hash}${image.ext}`} 
            alt='not found' width={image.width} height={image.height}

            onClick={e => alert(`Default height:${image.height} Default width:${image.width} 
            Path: http://localhost:1337/uploads/${image.hash}${image.ext}`)}
        >

            </Image>
            {/*alert()*/}
           
        </div>
    )
}

export default ImagePreview