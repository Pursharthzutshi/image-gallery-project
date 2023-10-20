import React, { useEffect, useState } from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import {ImCancelCircle} from "@react-icons/all-files/im/ImCancelCircle"

import "./TopBar.css";
import "./TopBarResponsive.css"

function TopBar({setSearchBarValue}){

    const [showToggleResponsiveViewClass,setShowToggleResponsiveViewClass] = useState(false);

    const [changeStyle,setChangeStyle] = useState(false);

    const [changeInnerToggleCircleClass,setChangeInnerToggleCircleClass] = useState(false);

    const [showMenuBar,setShowMenuBar] = useState(false);

    const searchImageContent = (e) =>{
            setSearchBarValue(e.target.value);
    }


 
const toggleTheme = (e)=>{
    if(e.target.checked){
        setChangeInnerToggleCircleClass(true);
        document.documentElement.setAttribute("toggle-theme","dark")
    }else{
        setChangeInnerToggleCircleClass(false);
        document.documentElement.setAttribute("toggle-theme","white");
    }
}

    const change = (e) =>{
        if(e.target.value == true){
            setChangeStyle(true);
        }
    }

    const addMenuBar = (e) =>{
        setShowMenuBar(true)
        setShowToggleResponsiveViewClass(true);

    }
    const removeMenuBar = (e) =>{
        setShowMenuBar(false)
        setShowToggleResponsiveViewClass(false);
    }


    return(
        <div className="top-bar-section">

            {
             showMenuBar ?

            <div className="menu-bar">

            <div className="menu-bar-close-icon-row">
            <ImCancelCircle onClick= {removeMenuBar} className="menu-bar-close-icon"/>

            </div>

            <div className="top-menu-bar-links-container">
            <h3>Menu Bar</h3>

            <p>Explore</p>
            <p>Collection</p>
            <p>Community</p>
            </div>
            <div className="toggle-button-container">
                <div className={showToggleResponsiveViewClass?"toggle-button-div-responsive-view":"toggle-button-div"}>
              
                {/* <div className={showToggleResponsiveViewClass?"toggle-button-div-responsive-view":"toggle-button-div"}> */}
                <div className={changeInnerToggleCircleClass?"toggle-inner-circle-after-toggle":"toggle-inner-circle"}>
                <input className="toggle-checkbox" type="checkbox" onClick={toggleTheme} onChange={change}/>
                </div>

                </div>
            </div>
            </div>
            :null
            }
            
            <h3 className="top-bar-heading">Image Gallery</h3>
            <div className="parent-top-search-bar-search-icon-container">

            <BsSearch className="top-bar-search-icon"/>
            <AiOutlineMenu onClick={addMenuBar} className="menu-bar-search-icon"/>

            <input onChange={(e)=>{setSearchBarValue(e.target.value)}} placeholder="Search images here" className="top-bar-search-bar" type="search"/>
            </div>

            <div className="top-bar-links-container">
            <p>Explore</p>
            <p>Collection</p>
            <p>Community</p>
            </div>

            <div className="toggle-button-container">
                <div>
                <p>{changeInnerToggleCircleClass?"Light Mode":"Dark Mode"}</p>
                </div>
                <div className="toggle-button-div">
              
                {/* <div className={showToggleResponsiveViewClass?"toggle-button-div-responsive-view":"toggle-button-div"}> */}
                <div className={changeInnerToggleCircleClass?"toggle-inner-circle-after-toggle":"toggle-inner-circle"}>
                <input className="toggle-checkbox" type="checkbox" onClick={toggleTheme} onChange={change}/>
                </div>

                </div>
            </div>
        </div>
    )
}

export default TopBar;