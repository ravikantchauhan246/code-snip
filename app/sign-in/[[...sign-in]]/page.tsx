"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { SignIn,useUser } from "@clerk/nextjs";
//import colors from "@app/colors";

const SignInPage = () =>{
    return (
        <div className={`w-full h-screen flex justify-center items-center`}>
            <SignIn/>
        </div>
    );
}

export default SignInPage;
