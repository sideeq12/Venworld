

const UserCard = ()=>{
    return(
        <div className="py-20 md:py-40 text-center">
            <h2 className="font-extrabold text-2xl">MEET OUR TEAM</h2>
            <p className="w-2/3 mx-auto font-light my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quis beatae 
            est tempora repellat, eaque ipsa commodi et modi totam,
             illum at! Vitae voluptatum distinctio animi repudiandae beatae quidem laudantium!</p>
           <div className="w-full flex flex-wrap justify-center align-middle gap-10 my-5">
           <div className="w-48 h-64 border border-black text-center text-xs">
            <div className="w-4/5 bg-workplace bg-contain h-2/3 mx-auto my-3">
            </div>
            <span className="">
                VenWorld Global
            </span> <br />
            <label htmlFor="" className="mt-3">Founder</label>

</div>
<div className="w-48 h-64 border border-black text-center text-xs">
            <div className="w-4/5 bg-sideeq  bg-cover bg-center h-2/3 mx-auto my-3">
            </div>
            <span className="">
                VenWorld Global
            </span> <br />
            <label htmlFor="" className="mt-3">Co-Founder</label>

</div>
<div className="w-48 h-64 border border-black text-center text-xs">
            <div className="w-4/5 bg-workplace bg-contain h-2/3 mx-auto my-3">
            </div>
            <span className="">
                VenWorld Global
            </span> <br />
            <label htmlFor="" className="mt-3">Manager</label>

</div>


           </div>
            </div>
    )
}

export default UserCard;