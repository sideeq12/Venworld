

const ContactUs = ()=>{
    return(
        <section className="w-full px-10 md:px-20 my-20 md:my-40">
            <h2 className="font-extrabold text-2xl mb-3">CONTACT US</h2>
            Get in touch with us <br /> anytime

            <div className="w-full flex  flex-row flex-wrap bg-blue-100 p-8 md:p-16 mt-4 ">
                <div className="w-full md:w-2/3 h-fit">
                    For any enquiry relating to retail and Leadership programm

                    <div className="w-full grid grid-cols-1 md:grid-cols-2   mb-4 mt-6">
                        <div>
                            <label htmlFor="Name">Name</label> <br />
                            <input type="text" className="mt-2 h-10 w-[16rem] rounded-sm"/>
                        </div>
                        <div>
                            <label htmlFor="Name">Email</label> <br />
                            <input type="email" className="mt-2 h-10 w-[16rem] rounded-sm"/>
                        </div>

                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
                        <div>
                            <label htmlFor="Name">Phone number</label> <br />
                            <input type="text" className="mt-2 h-10 w-[16rem] rounded-sm"/>
                        </div>
                        <div>
                            <label htmlFor="Name">Services</label> <br />
                            <input type="text" className="mt-2 h-10 w-[16rem] rounded-sm"/>
                        </div>

                    </div>
                    <div className="my-3 md:my-5">
                        <label htmlFor="">Your message :</label> <br />
                        <textarea  className="w-11/12 h-40 mt-3"/>

                    </div>
                    <button className="bg-blue-800 text-white px-20 py-3 rounded-sm">Send message</button>

                </div>
                <div className="w-full md:w-1/3 md:pt-20 pt-10">
                    <div className="bg-white max-sm:w-5/6 h-52 md:h-40 rounded-lg p-10 mb-10">
                    <h4 className="text-xl font-extrabold text-blue-800 mb-4">Office Address</h4>
                    <p className="text-sm font-light">Head quartered: Victoria Island,  <br />
                    Lagos, Nigeria</p>
                    </div>
                    <div className="bg-white max-sm:w-fit h-40 rounded-lg p-10">
                    <h4 className="text-xl font-extrabold text-blue-800 mb-4">Contact Info</h4>
                    <p className="text-sm font-light">Phone: Victoria Island </p>
                    <p className="text-sm font-light">Email: support@venworldglobal.com </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactUs;