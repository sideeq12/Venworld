

const LineSet = ({text})=>{

    const style = {
       "-webkit-text-stroke-width": "2px",
        "-webkit-text-stroke-color": "black",
        "-webkit-text-fill-color": "transparent",
        "font-size" : "4em"
    }
    return(
        <div className="w-full px-5 md:px-16 my-5 md:my-10 flex">
            <h1 className="w-1/2" style={style}>{text}</h1>
            <div className="border"> <hr /> </div>
        </div>
    )
}


export default LineSet;