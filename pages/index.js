import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import HomeHeader from '../components/HomeHeader'
import HomeLatestPost from '../components/HomeLatestPost'
import NavBar from '../components/NavBar'


export default function Home({posts}) {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        
        <h1>HOME</h1>

        <HomeHeader/>
        <HomeLatestPost posts={posts.data}/>

        
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const postRes = await axios.get("http://localhost:1337/api/blogs");
  return {
    props:{
      posts: postRes.data
    },
  };
}