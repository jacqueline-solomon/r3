import React from "react";
const Service =()=>{
    const imagePath = "https://w0.peakpx.com/wallpaper/101/853/HD-wallpaper-maldives-island-resort-turquoise-water-palm-beautiful-clouds-sea-beach-walkway-paradise-summer-wooden-terrace-island-tropical.jpg"
    return(
        <div className=" heading">
            <h1>Service </h1>
        
            <div className="cls">
           
        <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>"Cherish sunsets, wild creatures, and wild places. Have a love affair with the wonder and beauty of the Earth."<button>Click here</button></h4>
                
            </div>
            
            </div>
    );
};
export default Service;