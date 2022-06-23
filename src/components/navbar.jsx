import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import Logo from './assets/logo.png';

export const Navbar =({user})=>{
    const [color,setColor]=useState(null);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=100){
                setColor(true)
            }else{
                setColor(false)
            }
        })
    })

    return(
        <div className={color? 'fixed_navbar navbar':'navbar'}>
            <Link to='/' className="company_logo">
                <img src={Logo} alt="logo" />
            </Link>
            <button className="logout_btn" onClick={()=>auth.signOut()}>
                <img className="user_img" src={user.photoURL} alt="user image" />
            </button>
        </div>

    )
}