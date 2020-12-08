import React, { useState} from "react";
import "../styling/Style.css"

export const Search = (props) => {
const [input, setInput] = useState("");

const handleChange = (e) => {
    setInput(e)
}

 
    return (
        <>
            
        <div className="searchBoxParent">
            <h4>word typed: {input}</h4>
            <div id="search_border" className="search">
            
            <input
                id="search_bar"
                type="text"
                placeholder="Search Jobs"
                onChange={(e) => handleChange(e.target.value)}
                />
            <div className="searchIcon">
                    <input  type="submit" value="" class="search-icon" />
                </div>
            </div>
            <div id="float-options">
                
            </div>
            
           </div> 
        </>
    )

}

