import React from "react"
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider=()=>{
    return(
        <Carousel>
            <div >
            <img src="https://st.depositphotos.com/1003697/2134/i/450/depositphotos_21345991-stock-photo-tropical-beach.jpg" alt="slide 1" height="480px"></img>
                
                <p className="chairs">""Out here, under the open sky and endless stars, a cowboy's companions are his horse and the quiet rhythm of the prairie wind."

"</p>
              
            </div>
            <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4tvpEm0GFgeHqErD9x3ztfzFn7Vjv17Y-g&usqp=CAU" alt="slide 1"  height="480px"></img> 
                

                <p className="chairs">
"Riding the trails from dawn till dusk, facing the sun and storms alike, a cowboy knows that life's challenges are just like the changing weather."

"</p>
            </div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8LJyPtnR-qfy1M1Y6J7AMHFJN18uDJCanQ&usqp=CAU" alt="slide 1" height="480px" ></img>
                <p className="chairs">"Gathered 'round the campfire, stories of past rides and lost trails intertwine with the crackling flames, weaving a tapestry of cowboy wisdom."</p>
            </div>
            <div>
                <img src="https://i0.wp.com/samudramaldives.com/wp-content/uploads/things-to-do-in-maldives-at-night.jpg?fit=1920%2C1280&ssl=1" height="480px" alt="slide 4"></img>
                <p className="chairs">"In a world where the horizon stretches farther than the eye can see, a cowboy's heart is as vast as the land, forever bound to the freedom of the frontier."</p>
            </div>
        </Carousel>
    )
}
export default CarouselSlider;