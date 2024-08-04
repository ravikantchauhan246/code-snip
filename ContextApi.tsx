"use client"

import React, {createContext, useContext,useState} from 'react';
import BorderAll from '@mui/icons-material/BorderAll';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';



interface GlobalContextType{
    sideBarMenuObject:{
        sideBarMenu: SideBarMenu[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
    }
    
}

interface SideBarMenu{
    id: number;
    name: string;
    isSelected : boolean;
    icons : React.ReactNode;
}

const ContextProvider = createContext<GlobalContextType>({
    sideBarMenuObject:{
        sideBarMenu:[],
        setSideBarMenu:()=>{},
    }
   
})

export default function GlobalContextProvider({
    children,
}:{
    children: React.ReactNode;
}){
    const [sideBarMenu,setSideBarMenu] = useState<SideBarMenu[]>([
        {id:1,name:"All Snippets", isSelected:true,icons:<BorderAll/>},
        {
            id:2,
            name:"Favorites",
            isSelected:false,
            icons:<FavoriteBorder/>
        },{
            id:3,
            name:"Trash",
            isSelected:false,
            icons:<DeleteOutlineOutlined/>,
        }
    ])

    return (
        <ContextProvider.Provider
            value = {{sideBarMenuObject:{sideBarMenu,setSideBarMenu}}}
        > {children}
        </ContextProvider.Provider>
    )
}

export const useGlobalContext  = () =>{
    const context = useContext(ContextProvider);
    if(!context){
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }

    return context;
}