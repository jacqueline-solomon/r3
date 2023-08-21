import React from "react";
const Contact =()=>{
 const imagePath = "https://i0.wp.com/samudramaldives.com/wp-content/uploads/things-to-do-in-maldives-at-night.jpg?fit=1920%2C1280&ssl=1"
    return(
        <div className=" heading">
            <h1>spots</h1>
        
            <div className="cls">
           
            <img src= {process.env.PUBLIC_URL  +  imagePath }alt=" s1" width="500px" />
          
            <h4>
"You can’t buy happiness. But you can buy a ticket to the Maldives. And that’s pretty much the same thing.
"<button>Click here</button></h4>
                
            </div>
            
            </div>
    );
};
export default Contact;