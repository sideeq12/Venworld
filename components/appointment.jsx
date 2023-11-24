const Appointment = ()=>{
    return(
        <div className="mx-auto w-3/4 md:w-2/3 my-20 md:my-40 text-left md:text-center">
            <h3 className="font-extrabold mb-10">Make an appointment</h3>
            <input type="text" placeholder="Enter name" className="border  boder-black text-center w-full py-1 rounded-lg mb-3"/>
            <input type="text" placeholder="Enter name" className="border  boder-black text-center w-full py-1 rounded-lg mb-3"/>
            <input type="text" placeholder="Enter name" className="border  boder-black text-center w-full py-1 rounded-lg mb-3"/>
            <input type="text" placeholder="Enter name" className="border  boder-black text-center w-full py-1 rounded-lg mb-3"/>
            <textarea  className="w-full p-5 h-40" placeholder="your message here..."/>
            <button className="py-3 rounded-lg my-2 text-white bg-blue-900 w-full">Submit</button>
            </div>
    )
}

export default Appointment;