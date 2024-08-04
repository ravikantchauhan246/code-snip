'use client'

import { UserButton,useAuth,useUser } from "@clerk/nextjs"

function ProfileUser(){
    const {user} = useUser();
    const imageUrl = user?.imageUrl;
    const loadingImage = (
        <div className="w-9 h-9 rounded-full mb-[5px] bg-black"></div>
    );

    const loadingUserName = (
        <span className="font-semibold bg-slate-100 h-4 w-[100px]"></span>
    );

    const loadingUserEmail = (
        <span className="text-slate-500 text-[11px] bg-slate-100 h-2 w-[130px]"></span>
    )

    return(
        <div>
        <div className="flex gap-3 items-center">
            {!user ? (
                loadingImage
            ):(
                <img
                    src={imageUrl}
                    alt ={`${user?.firstName} ${user?.lastName}`}
                    className="w-9 h-9 rounded-full mb-[5px]"
                />
            )}

            <div className="flex flex-col text-sm">
                <span className="font-semibold text-slate-400">
                    {user?.firstName} {user?.lastName}
                </span>
                <span className="text-slate-500 text-[11px]">
                    {user?.emailAddresses[0].emailAddress}
                </span>
            </div>
        </div>
        </div>
    )
}

export default ProfileUser