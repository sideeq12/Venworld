import { MdOutlineFileCopy } from "react-icons/md";
import { GoPlay } from "react-icons/go";
import { GoDash } from "react-icons/go";
import Link from "next/link";


const InternshipPost = () =>{
    return (
        <div className="h-80 w-72 shadow-lg bg-white rounded-2xl border-2 p-5 ">  
                <div className="flex justify-between" >
            <MdOutlineFileCopy size={40} className="text-blue-800" />
                </div>
               
                <h3 className="my-6 text-xl font-bold">User Experience</h3>

                <ul className="text-sm font-light gap-6 mb-6">
                    <li className="flex mr-2"><GoDash /> UX Strategy</li>
                    <li className="flex mr-2"><GoDash /> Information architecture</li>
                    <li className="flex mr-2"><GoDash /> Prototyping</li>
                    <li className="flex mr-2"><GoDash /> Wire Framing</li>
                    <li className="flex mr-2"><GoDash /> UX Strategy</li>
                </ul>
                <Link href="#" className="px-8 py-2 mx-auto  text-white rounded-md bg-blue-800">Apply now</Link>
            </div>
       
    )
}

export default InternshipPost;