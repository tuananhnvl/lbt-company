import React,{useRef,useEffect} from 'react'
import '.././styles/GridCustom.css'
import gsap,{Power3}  from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin);
function GridCustom() {
    console.log('GridCustom running!')
    useEffect(() => {
   
        const listItemGrid = document.querySelector('.wrapper-all-custom-grid').childNodes
        const headers = gsap.utils.toArray(listItemGrid)
     // console.log(headers)

        for (let i = 0; i < headers.length; i++) {
            gsap.to(headers[i].childNodes, {
                duration: 5, 
                height: "100%", 
                delay: i/5
            });
        }

 
      
       
       /*  var rule = CSSRulePlugin.getRule(".wrapper-all-custom-grid div span"); //get the rule
    
        gsap.to(rule, 
            {
            duration: 15, 
            cssRule: {
                height: "100%", 
                color: "blue",
            },
            stagger: {
                amount:2
            }
        }
        ); */
    
    });
  



  return (
   
    <div className='wrapper-all-custom-grid'>
        <div>
            <span></span>
        </div>
        <div>
            <span></span>
        </div>
        <div>
            <span></span>
        </div>
        <div>
            <span></span>
        </div>
        <div className='breakpoint-600'>
            <span></span>
        </div>
        <div className='breakpoint-600'>
            <span></span>
        </div>
        <div className='breakpoint-1000 breakpoint-600'>
            <span></span>
        </div>
        <div className='breakpoint-1000 breakpoint-600'>
            <span></span>
        </div>
        
    </div>
  )
}
export default GridCustom