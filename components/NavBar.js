import React from "react";
import Link from "next/link";
import { parseCookies } from "nookies";

function Username(){
    const cookies = parseCookies();
    const cookie_name = (typeof cookies.strapinextapp_username != 'undefined') ? cookies.strapinextapp_username : '';

    return(
        <div>
            {'hello '+ cookie_name}
        </div>
    )
}   

export default function NavBar(){
    return (
    
      <nav className="NavBar">
        <div className="container">

                <Link href="/">
                    <a className="title">Home</a>
                </Link>
                <Link href="/post">
                    <a className="title">new post</a>
                </Link>
                <Link href="/images">
                    <a className="title">Images</a>
                </Link>

            <ul>
                <li>
                    <Username/>
                </li>
                <li>
                    <Link href="/posts">
                        <a>All posts</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
         </div>
      </nav>
    
    )
}