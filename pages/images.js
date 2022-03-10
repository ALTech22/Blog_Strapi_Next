import axios from "axios"
import Link from "next/link"
import ImagePreview from "../components/ImagePreview"

function Images({images}){
    
    function renderImages(){
        return images.map((image) => {
            console.log('a ',image.hash)
            return (<ImagePreview image={image} key={image.id}></ImagePreview>)
        })
    }

    return(
    <div className="container">
        <nav className="NavBar">
            <Link href="/NewImage">
                    <a className="title">Add Image</a>
            </Link>
        </nav>
        {renderImages()}
    </div>
    )
}

export default Images

export async function getServerSideProps(){
    const images = await (await axios.get('http://localhost:1337/api/upload/files')).data

    return {
        props:{
            images: images
        }
    }
}