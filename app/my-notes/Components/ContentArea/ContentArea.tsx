import React from 'react'
import ProfileUser from './TopBar/ProfileUser';
import SearchBar from './TopBar/SearchBar';
 

function ContentArea(){
    return(
        <div className=' w-[80%] bg-black p-5'>

            <TopBar/>


        </div>
    )
}

export default ContentArea;

function TopBar(){
    return(
        <div className="rounded-lg flex justify-between items-center bg-black p-3" >
            <ProfileUser/>
            <SearchBar/>
        </div>
    )
}