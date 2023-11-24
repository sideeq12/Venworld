
import Jumbotron from "@/components/jumbotron";
import LineSet from "@/components/lineset";
import { LuCircleDot } from "react-icons/lu";
import { MdOutlineFileCopy } from "react-icons/md";
import { GoPlay } from "react-icons/go";
import { GoDash } from "react-icons/go";
import Appointment from "@/components/appointment";
import { IoLogoDesignernews } from "react-icons/io";



const Services = () =>{
    return(
        <div className="pb-20">
            <Jumbotron headline="SERVICES" check="false" recent="Services" before="Home" />
            <LineSet text="OUR SERVICES" />
            <div className="px-10 md:px-20">
                <h1 className="font-extrabold text-2xl">We are digitally-led, full-service <br /> Creative agency</h1>
                <p className="md:w-1/2 font-light text-sm my-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt neque, reprehenderit reiciendis, iure fuga quibusdam quidem repellendus ut assumenda, 
                    consequatur doloremque eligendi! Non expedita, praesentium ex asperiores cumque omnis?</p>
                    <LuCircleDot size={30} />
                    <div className="grid md:grid-cols-3  gap-8 my-10">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
            </div>
            <Appointment />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20 md:mt-32 px-10 md:px-20">
                <div>
                    <h3 className="w-2/3 my-10 font-extrabold  text-3xl">BRANDS WE HAVE COLLABORATED WITH.</h3>
                    <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum unde, 
                        nobis quos quo voluptatem quisquam optio, officiis nesciunt magnam delectus!
                         Recusandae nulla iure quis tempora unde nemo excepturi a.</p>
                </div>
                <div className="grid grid-cols-2 text-orange-500 gap-4 md:grid-cols-4">
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                    <span className="border h-fit p-5"> <IoLogoDesignernews  size={40}/></span>
                </div>
            </div>
            <Jumbotron  />
        </div>
    )
}


export default Services;

const Cards = ()=>{
    return(
        <div className="h-80 bg-workplace group text-white">
            <div className="h-full w-full bg-black group-hover:bg-opacity-70 pt-10">
                <div className="flex justify-between mt-10 mx-10" >
            <MdOutlineFileCopy size={30} /> <GoPlay />
                </div>
                <div className="group-hover:bg-blue-800 px-10 h-full pt-5">
                <h3 className="my-6">USER EXPERIENCE</h3>

                <ul className="text-sm font-light gap-6">
                    <li className="flex"><GoDash /> UX Strategy</li>
                    <li className="flex"><GoDash /> Information architecture</li>
                    <li className="flex"><GoDash /> Prototyping</li>
                    <li className="flex"><GoDash /> Wire Framing</li>
                    <li className="flex"><GoDash /> UX Strategy</li>
                </ul>
            </div>
            </div>
        </div>
    )
}