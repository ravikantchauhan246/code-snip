"use client"
import { useGlobalContext } from "@/ContextApi";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";

function SideBarMenuIcon(){
    const {
        openSideBarObject:{openSideBar,setOpenSideBar}
    } = useGlobalContext();

    return(
        <>
            {!openSideBar ?(
                <MenuOutlined 
                onClick={()=> setOpenSideBar(!openSideBar)}
                className="text-slate-500 cursor-pointer hidden max-md:block"/>
            ):(
            <CloseOutlined
                onClick = {()=>{ setOpenSideBar(!openSideBar)}}
                className="text-slate-500 cursor-pointer hidden max-md:block"
            />
            )}
        </>
    );
}

export default SideBarMenuIcon;