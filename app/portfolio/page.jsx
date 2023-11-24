import Jumbotron from "@/components/jumbotron";
import LineSet from "@/components/lineset";
import { HiLink } from "react-icons/hi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div>
      <Jumbotron
        check={true}
        headline="CATALOGUE"
        before="Home"
        recent="Products"
      />
      <LineSet text="PORTFOLIO" />

      <div className="w-5/6  ml-8 md:ml-16 my-20 md:my-40">
        <h1 className="text-4xl mb-4 font-extrabold">
          HERE SOME WORKS <br />
          FROW OUR PORTFOLIO
        </h1>
        <p>
          We show only the best websites and portfolio built completely <br />{" "}
          with passion, simplicity and creativity.
        </p>
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 h-fit md:h-96 gap-8">
          <div className="h-full bg-workplace bg-center">
            <div className="bg-black w-full h-full bg-opacity-60 p-10 group">
              <div className="group-hover:cursor-pointer group-hover:bg-blue-900 w-full h-full group-hover:bg-opacity-60 p-6  text-white">
                <div className=" mb-10">
                  <HiLink
                    size={30}
                    className="mb-10 mx-auto mt-20 invisible group-hover:visible"
                  />
                  <div className="flex flex-row">
                    <div>
                      <span>User Experience Design</span>
                      <p className="text-xs font-light mt-2">
                        World class UI/uX Design with <br /> perfect user
                        Experience Design
                      </p>
                    </div>
                    <FaRegArrowAltCircleRight
                      size={25}
                      className="mb-10 mx-3 invisible group-hover:visible"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full bg-workplace bg-center">
          <div className="bg-black w-full h-full bg-opacity-60 p-10 group">
              <div className="group-hover:cursor-pointer group-hover:bg-blue-900 w-full h-full group-hover:bg-opacity-60 p-6  text-white">
                <div className=" mb-10">
                  <HiLink
                    size={30}
                    className="mb-10 mx-auto mt-20 invisible group-hover:visible"
                  />
                  <div className="flex flex-row">
                    <div>
                      <span>User Experience Design</span>
                      <p className="text-xs font-light mt-2">
                        World class UI/uX Design with <br /> perfect user
                        Experience Design
                      </p>
                    </div>
                    <FaRegArrowAltCircleRight
                      size={25}
                      className="mb-10 mx-3 invisible group-hover:visible"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full bg-workplace bg-center">
          <div className="bg-black w-full h-full bg-opacity-60 p-10 group">
              <div className="group-hover:cursor-pointer group-hover:bg-blue-900 w-full h-full group-hover:bg-opacity-60 p-6  text-white">
                <div className=" mb-10">
                  <HiLink
                    size={30}
                    className="mb-10 mx-auto mt-20 invisible group-hover:visible"
                  />
                  <div className="flex flex-row">
                    <div>
                      <span>User Experience Design</span>
                      <p className="text-xs font-light mt-2">
                        World class UI/uX Design with <br /> perfect user
                        Experience Design
                      </p>
                    </div>
                    <FaRegArrowAltCircleRight
                      size={25}
                      className="mb-10 mx-3 invisible group-hover:visible"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between  px-10 md:px-20">
        <div className="w-full md:w-2/3 mb-10 ">
            <h2 className="font-extrabold text-2xl md:w-2/3">BRANDS WE HAVE COLLABORATED WITH.</h2>
            <p className="font-light text-sm mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsam repudiandae mollitia quam 
                reiciendis! Eligendi est eius natus nulla quis
                 perspiciatis deserunt! Perferendis, veritatis. Aut nostrum
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsam repudiandae mollitia quam 
                reiciendis! Eligendi est eius natus nulla quis
                 perspiciatis deserunt! Perferendis, veritatis. Aut nostr
                  illum animi modi porro?</p>
        </div>
        <div>Inos</div>
      </div>

      <LineSet text="PRODUCTS" />
    </div>
  );
};

export default Portfolio;
