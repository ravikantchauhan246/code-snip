"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { SignUp } from "@clerk/nextjs";
//import colors from "@app/colors";

const SignUpPage = () =>{
    return (
        <div className={`w-full h-screen flex justify-center items-center`}>
            <SignUp/>
        </div>
    );
}

export default SignUpPage;
