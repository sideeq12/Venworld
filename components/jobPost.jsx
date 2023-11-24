import Link from "next/link"
import { FaUserCircle } from "react-icons/fa";


const JobPost = ( )=>{
    return (
        <div className="h-fit w-fit shadow-lg bg-white rounded-2xl mr-5 md:mr-16 border inline-block 
         border-blue-700 p-5 md:p-10 ">  
        <div className="flex">
            <FaUserCircle  size={50} className="mr-4"/>
            <div className="flex flex-col gap-2 font-light text-sm ">
            <h4 className="font-semibold text-lg">UI/UX Designer.</h4>
            <span>Lagos, Nigeria</span>
        <span>Remote Work.</span>
        <span>Send resume to venworld@gmail.com </span>
    <span className="flex gap-2 justify-start align-middle  text-xs">    <label htmlFor="" className="text-gray-500 ">19 hours ago </label> By Admin.</span>
        <div className="flex text-xs text-gray-500 align-middle mb-3">
            <span className="flex">
            <FaUserCircle  size={30} className=""/>
            <FaUserCircle  size={30} className="-ml-2"/>
            <FaUserCircle  size={30} className="-ml-2"/>
            </span>
            <p className="mt-2 space-x-2 ml-2">15 applied already</p>
        </div>
        <Link href="#" className="px-8 py-3 w-fit  text-white rounded-md font-semibold bg-blue-800">Send CV/Resume</Link>
            </div>
        </div>
      

  
    </div>
    )
}


export default JobPost;