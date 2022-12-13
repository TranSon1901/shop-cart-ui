import './Slider.css'
import {MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { useState } from 'react'
import { sliderItems } from '../../data/data'
function Slider(){
    const [sliderIndex,setSliderIndex]=useState(2)
    const handleClick = (direction)=>{
      if(direction==='left'){
        setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
      }else {
        setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
      }
    }
    console.log(sliderItems)
    return(
        <div className='slider_container'>
            <div className='slider_arrow'>
                <MdArrowLeft className='slider_arrow_left'  onClick={() => handleClick("left")}/>
            </div>
            <div className='slider_wrapper'>
                {
                sliderItems.map(item=>(
                    <div className='slider' key={item.id}>
                        <div className='slider_container'>
                               <img src={item.img}/>
                               <div className='slider_info'>
                                   <h1 className='slider_title'>{item.title}</h1>
                                   <p className='slider_desc'>{item.desc}</p>
                                   <button className='slider_btn'>SHOW NOW</button>
                             </div>
                        </div>
                    </div>
                    ))
                }  
                {/* {
                    <div className='slider'>
                    <div className='slider_container'>
                           <img src={sliderItems[sliderIndex].img}/>
                           <div className='slider_info'>
                               <h1 className='slider_title'>{sliderItems[sliderIndex].title}</h1>
                               <p className='slider_desc'>{sliderItems[sliderIndex].desc}</p>
                               <button className='slider_btn'>SHOW NOW</button>
                         </div>
                    </div>
                </div>
                } */}
            </div>
            <div className='slider_arrow'>
                 <MdArrowRight className='slider_arrow_right' onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}
export default Slider