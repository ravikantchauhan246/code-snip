import { UserButton } from "@clerk/nextjs";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";

export default function page(){
    return(
        <div className="flex flex-row justify-between">
           <Sidebar/>
           <ContentArea/>
        </div>
    )
}