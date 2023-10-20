import React, { useEffect, useState } from "react";
import "./HeaderSection.css"
import "./HeaderSectionResponsive.css"
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";


function HeaderSection({setSearchBarValue}){
    

        
    return(
        <div className="header-section">
            
            <h2>Download High Quality Images by creators</h2>
            <span>Over 2.4 million+ stock Images by our talented community</span>
            <div className="parent-header-search-bar-search-icon-container">
            <BsSearch className="header-bar-search-icon"/>   
            <input onChange={(e)=>{setSearchBarValue(e.target.value)}} className="header-search-bar" placeholder="Search high resolution Images, categories, wallpapers" type="text"/>
            </div>
        </div>
    )
}

export default HeaderSection;