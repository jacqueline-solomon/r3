import React from "react";
import "./App.css";
const About =()=>{
    const imagePath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8LJyPtnR-qfy1M1Y6J7AMHFJN18uDJCanQ&usqp=CAU"
    return(
        <div className=" heading">
            <h1 >About</h1>

            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath } alt=" s1" width="500px" />
          
            <h4>"Over water bungalows, numerous snorkeling sites, and incredible beaches put the islands of the Maldives on
            our list."<button>Click here</button><br/></h4>
                
            </div>
            
            </div>
    );
};
export default About;