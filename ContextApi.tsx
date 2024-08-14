"use client"

import React, {createContext, useContext,useState} from 'react';
import BorderAll from '@mui/icons-material/BorderAll';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

interface SideBarMenu{
    id: number;
    name: string;
    isSelected : boolean;
    icons : React.ReactNode;
}

interface GlobalContextType{
    sideBarMenuObject:{
        sideBarMenu: SideBarMenu[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
    };

    openSideBarObject:{
        openSideBar:boolean;
        setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    }
    
}

const ContextProvider = createContext<GlobalContextType>({
    sideBarMenuObject:{
        sideBarMenu:[],
        setSideBarMenu:()=>{},
    },

    openSideBarObject:{
        openSideBar:false,
        setOpenSideBar: ()=>{}
    },
   
})

export default function GlobalContextProvider({
    children,
}:{
    children: React.ReactNode;
}){
    const [sideBarMenu,setSideBarMenu] = useState<SideBarMenu[]>([
        {id:1,name:"All Snippets", isSelected:true,icons:<BorderAll sx={{fontSize:18}}/>},
        {
            id:2,
            name:"Favorites",
            isSelected:false,
            icons:<FavoriteBorder sx={{fontSize:18}}/>
        },{
            id:3,
            name:"Trash",
            isSelected:false,
            icons:<DeleteOutlineOutlined sx={{fontSize:18}}/>,
        },{
            id:4,
            name:"Log Out",
            isSelected:false,
            icons: <LogoutIcon sx={{fontSize:18}}/>
        }
    ]);

    const [openSideBar,setOpenSideBar] = useState(false);

    return (
        <ContextProvider.Provider
            value = {{sideBarMenuObject:{sideBarMenu,setSideBarMenu},
            openSideBarObject:{openSideBar,setOpenSideBar},
        }}
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