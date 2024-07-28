import { SignUp } from "@clerk/nextjs";
import React from 'react';

export default function Page() {
    return (
        <div className="bg-background flex justify-center items-center p-10 w-full h-[100vh]">
            <SignUp />
        </div>
    );
}