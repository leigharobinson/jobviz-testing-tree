import React from "react"
import {Title} from "../title/Title"
import "../styling/Style.css"

export const LevelTwoList = (props) => {
const levelOneUrl = props.levelOneUrl
const levelTwoUrl = props.category

   return (
        <>
        <div>
            <Title />
        </div>
        <div className="jobviz-parent"> 
           
            
    
               <h1>YOU've arrived at level two</h1>
               <div>{levelTwoUrl}</div>
               <div> {levelOneUrl} </div>
         
        
        
        </div>
        
    </>
)
}