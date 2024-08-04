import React from 'react';
import BorderAll from '@mui/icons-material/BorderAll';
import FavoriteBorder  from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineOutlined from '@mui/icons-material/DeleteOutlineOutlined';
import DataObject  from '@mui/icons-material';
import { SiJavascript,SiPython,SiTypescript,SiCplusplus } from "react-icons/si";
import { mainColor } from '@/Colors';
import TextSnippet from '@mui/icons-material/TextSnippet';


export default function Sidebar(){
    return(
        <div className='w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 border-r'>
        <Logo/>
        <QuickLinks/>
        <Languages/>
        </div>
    )
}

function Logo() {
    return (
      <div className="flex gap-2 items-center">
        <div
          style={{ backgroundColor: mainColor }}
          className={`p-[3px] rounded-md`}
        >
          <TextSnippet sx={{ fontSize: 40, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span style={{ color: mainColor }} className={`font-bold`}>
            Code
          </span>
          <span className="text-slate-600">Snip</span>
        </div>
      </div>
    );
  }

  function QuickLinks(){
    return(
        <div className="mt-20 text-sm">
            <div className="font-bold text-slate-400"> Quick Links</div>
            <ul className="text-slate-400 mt-4 flex flex-col gap-2">
                <li className='flex gap-1 items-center bg-purple-600 text-white p-[7px] px-2 rounded-md w-[60%]'>
                    <BorderAll sx={{fontSize : 18}}/>
                    <span>All Snippet</span>
                </li>
                <li className='flex gap-1 items-center p-[7px] px-2 rounded-md w-[60%] hover:bg-purple-600 hover:text-white'>
                    <FavoriteBorder sx={{fontSize: 18}}/>
                </li>

                <li className='flex gap-1 items-center p-[7px] px-2 rounded-md w-[60%] hover:bg-purple-600 hover:text-white'>
                    <DeleteOutlineOutlined sx={{fontSize:18}}/>
                    <span>Trash</span>
                </li>
            </ul>
        </div>
    );
  }

  function Languages(){
    return(
        <div className="mt-12 text-sm">
            <div className="font-bold text-slate-300">Languages</div>
            <div className='mt-5 ml-2 text-slate-400 flex flex-col gap-4'>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <SiJavascript size={15}/> JavaScript
                    </div>
                    <span className='font-bold'>3</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <SiCplusplus size={15}/> C++
                    </div>
                    <span className='font-bold'>3</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <SiPython size={15}/> Python
                    </div>
                    <span className='font-bold'>3</span>
                </div>
            </div>
        </div>
    )
  }