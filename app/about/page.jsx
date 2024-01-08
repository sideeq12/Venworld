"use client"

import Jumbotron from "@/components/jumbotron";
import LineSet from "@/components/lineset";
import Catalogue from "@/components/catalogue";
import MyAccordion from "@/components/mainAccord";
import UserCard from "@/components/userCard";
import ContactUs from "@/components/contact";

const About = ()=>{
    return (
        <section>
            <Jumbotron headline="ABOUT US" before="Home" recent="About us" check={true} />
            <LineSet text="ABOUT US" />

            <div className="flex md:flex-row h-fit flex-col px-5 md:px-16 border-2  w-full justify-between
             my-5 md:my-20">
                <div className="w-full md:w-1/3">
                    <div>
                        <h2 className="mb-3 font-bold text-xl md:mb-6">WHO WE  ARE</h2>
                        <p className="font-light mb-6">Venworld Global is a renowned software engineering and media solutions company thriving to take your business setups to the next phase of development!We assure you that our well-planned services would definitely bring your brand to the limelight. 
                        Our team of professionals combine with experienced advanced tools to develop the best scalable projects.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-3 font-bold text-xl md:mb-6">WHAT OUR PLAN IS</h2>
                        <p  className="font-light mb-6">At Venworld, we champion digital innovation. With eight years of expertise and a dynamic team across West Africa and key Asian countries, we specialize in Software Engineering, Web and Mobile App Development, E-Commerce, and Media Production. Our mission is to deliver tailor-made, high-quality solutions, empowering businesses to thrive in the digital realm. Using advanced tools and skilled professionals, we drive digital transformation, ensuring our clients' 
                        success and sustained growth in an ever-evolving technological landscape</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-96 md:h-96 border gap-1">
                    <div className="h-1/3 w-full bg-workplace rounded-xlg mb-2">
                    </div>
                    <div className="h-1/3 w-full flex gap-2">
                        <div className="h-full w-1/2 bg-workplace rounded-xlg">
                        </div>
                        <div className="h-full w-1/2 bg-workplace rounded-xlg">
                        </div>
                        </div>
<div className="h-1/3 w-full gap-2 flex">
                        <div className="h-full w-1/3 bg-workplace rounded-xlg">

                        </div>
                        <div className="h-full w-1/3 bg-workplace rounded-xlg">

</div>
<div className="h-full w-1/3 bg-workplace rounded-xlg">

</div>

</div>
<div className="h-1/3 w-full">

</div>
                </div>
            </div>

            <Catalogue />

            <Jumbotron  check={false} recent="About us" />
            <ContactUs />
            <MyAccordion />

           <UserCard />

       </section>
    )
}


export default About;