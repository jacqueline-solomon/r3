import React from "react"
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSlider=()=>{
    return(
        <Carousel>
            <div >
            <img src="https://st.depositphotos.com/1003697/2134/i/450/depositphotos_21345991-stock-photo-tropical-beach.jpg" alt="slide 1" height="480px"></img>
                
                <p className="chairs">""Out here, under the open sky and endless stars, you can't buy happiness but you can buy a tickets."

"</p>
              
            </div>
            <div >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4tvpEm0GFgeHqErD9x3ztfzFn7Vjv17Y-g&usqp=CAU" alt="slide 1"  height="480px"></img> 
                

                <p className="chairs">"Enjoy ur life with travel and reach your dream destination ."

"</p>
            </div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8LJyPtnR-qfy1M1Y6J7AMHFJN18uDJCanQ&usqp=CAU" alt="slide 1" height="480px" ></img>
                <p className="chairs">"Happiness is to fullfill our dreams so dream with your lovely places."</p>
            </div>
            <div>
                <img src="https://i0.wp.com/samudramaldives.com/wp-content/uploads/things-to-do-in-maldives-at-night.jpg?fit=1920%2C1280&ssl=1" height="480px" alt="slide 4"></img>
                <p className="chairs">"you can't buy a time and happiness but you can buy a tickets for ur dream destination soo book a tickets."</p>
            </div>
        </Carousel>
    )
}
export default CarouselSlider;
