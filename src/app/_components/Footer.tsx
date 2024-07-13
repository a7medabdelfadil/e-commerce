// ** In the name of Allah ♥️
'use client'
import Image from "next/image"
import { useUser } from "@clerk/nextjs";


const Footer = () => {
    const { user } = useUser()
    return user && (
        <div>
            <h1>Footer</h1>
        </div>
    )
};

export default Footer;
