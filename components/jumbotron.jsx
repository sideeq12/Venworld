import { TiArrowRight } from "react-icons/ti";


const Jumbotron = ({headline, before, recent, check })=>{
    return(

        <div className="bg-workplace bg-blend-darken bg-cover bg-center text-white">
        <div className="py-10 md:py-32 text-center bg-black bg-opacity-75">
        {check ?<> <h1 className="font-extrabold mb-5 text-2xl">{headline}</h1>
          <div className="flex flex-row w-fit mx-auto font-light" >  {before} 
          <TiArrowRight size={20} className="mx-1 mt-1" /> {recent}</div> 
          </> :
           <p className="w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At facilis, omnis veniam incidunt blanditiis tempora sed. Iusto in,
             quisquam ratione ex magnam sint explicabo dicta laborum nisi cupiditate facere ipsam.</p>
             }
        </div>
      </div>
    )
}


export default Jumbotron; 