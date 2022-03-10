import React, { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/router";
import Link from "next/link";



function Login(){
    const {register, handleSubmit} = useForm()
    const router = useRouter();
    //const {register, handleSubmit} = useForm()

    async function submit(d){
        try{
            const cookies = parseCookies()
            console.log({cookies})
        }catch(err){}

        console.log(d, typeof d, d.identifier, d.password)

        await axios.post('http://localhost:1337/api/auth/local', d)
            .then(res => {
                const token = res.data.jwt;
                const username = res.data.user.username
                console.log(token)
                setCookie(undefined, 'strapinextapp_token', token, {
                    maxAge: 60*60*1 // 1 hora
                })
                setCookie(undefined, 'strapinextapp_username', username, {
                    maxAge: 60*60*1 // 1 hora
                })
            })
            .catch(err => console.log('aaaaaaaaaaaaaaaaaaaaaaaaa',err.request))
            router.push('/')
    }

    return(
    <div className="container">
        <form className="login">
            <input type="text" placeholder="email" name="email"
            {...register('identifier')}/>
            <input type="password" placeholder="password" name="password"
            {...register('password')}/>
            <button type="submit" onClick={handleSubmit(submit)}>submit</button>
        </form>
        <Link href='/register' passHref>
            <div>
                Registrar
            </div>
        </Link>
    </div>
    )
}

export default Login