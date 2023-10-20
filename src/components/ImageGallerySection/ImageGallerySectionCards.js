import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";

import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram";
import {FiTwitter} from "@react-icons/all-files/fi/FiTwitter";

import {AiOutlineShareAlt} from "@react-icons/all-files/ai/AiOutlineShareAlt";
import {AiOutlineInfoCircle} from "@react-icons/all-files/ai/AiOutlineInfoCircle";

import "./ImageGallerySection.css"
import "./ImageGallerySectionResponsive.css"

function ImageGallerySectionCards({apiDataset,searchBarValue}){

    const [popUpBoxBgFilterContainer,setPopUpBoxBgFilterContainer] = useState(false);

    const [showPopUpBox,setShowPopUpBox] = useState(false);

    const [test,setTest] = useState("");

    const imageBoxKey = (galleryBoxKey)=>{
        console.log(galleryBoxKey)
        if(galleryBoxKey){
            setShowPopUpBox(true);
            setTest(galleryBoxKey);
            setPopUpBoxBgFilterContainer(true);

        }
        // else{
        //     setShowPopUpBox(false);   
        //     setPopUpBoxBgFilterContainer(false);
        // }
    }

    const closePopUpBox = () =>{
        setShowPopUpBox(false);   
        setPopUpBoxBgFilterContainer(false);
    }

        return(
            <div>
                {
                    popUpBoxBgFilterContainer && <div className="bg-filter"></div>
                }
            <div className="gallery-image-container">
            {
                apiDataset.filter((val)=>{
                    if(searchBarValue === ""){
                        return val;
                    }else if(val.user.username.toLowerCase().includes(searchBarValue.toLowerCase())){
                        return val;
                    }
                }).map((val,key)=>{
                    return(
                        <div onClick={()=>imageBoxKey(key)} className="gallery">
                        <div className="gallery-images-boxes">
                            <img className="gallery-images" src={val.urls.full}/>
                        </div>
                        <div className="image-user-profile-content-box">
                            <div className="user-profile-name-parent-container">

                            <div>
                            <img className="user-profile-image" src = {val.user.profile_image.small}/>
                            </div>

                            <div className="user-fullname-username-container">
                           
                            <div className="user-name-div">
                            <p>{val.user.first_name}</p>
                            <p>{val.user.last_name}</p>
                            </div>
                           
                            <div>
                            <p className="username">@{val.user.username}</p>
                            </div>
                            </div>
                    
                            </div>


                            <div className="user-likes-icon-container">
                            <AiOutlineLike className="user-likes-icon"/>
                            <p>{val.likes}</p>
                            </div>
                              
                            </div>

                            </div>
                    )
                })
                
            }



            {
                showPopUpBox && apiDataset.filter((val,key)=>{
                    if(key === test){
                        return val
                    }
                }).map((val,key)=>{
                    return(
                        <div onClick={()=>imageBoxKey(key)} className="gallery-pop-up-box">
                 <div className="pop-up-gallery-images">
                            <img className="gallery-images" src={val.urls.full}/>                       
                            </div>
                        <div id="resp-pop-up-image-user-profile-content-box" className="pop-up-image-user-profile-content-box">
                            <div id="resp-user-profile-name-parent-container" className="user-profile-name-parent-container">

                            <div>
                            <img id="resp-user-profile-image" className="user-profile-image" src = {val.user.profile_image.small}/>
                            </div>

                            <div id ="resp-user-fullname-username-container" className="user-fullname-username-container">
                           
                            <div id ="resp-user-name-div" className="user-name-div">
                            <p>{val.user.first_name}</p>
                            <p>{val.user.last_name}</p>
                            </div>
                            <div>
                            <p className="username">@{val.user.username}</p>
                            </div>

                            </div>

                            <div className="social-media-handle-row">
                          
                          <div id="resp-social-media-handle-div" className="social-media-handle-div">
                            <AiOutlineInstagram className="social-media-icons"/>
                            <p className="social-media-username">/{val.user.instagram_username}</p>
                            </div>
                            <div className="social-media-handle-div">
                            <FiTwitter className="social-media-icons"/>
                            <p className="social-media-username">/{val.user.twitter_username}</p>
                            </div>
                            
                            </div>
                                                
                            </div>

                   
                            <div className="user-likes-icon-container">
                            <div className="user-likes-icon-div">
                            <p>1.2k</p>
                            <p>Downloads</p>
                            </div>
                            
                            <div className="user-likes-icon-div">
                            <AiOutlineLike className="user-likes-icon"/>
                            <p>{val.likes}</p>
                            </div>
                            
                            </div>
                              
                            </div>
                            { <div className="close-pop-up-box-icon-div">
                <ImCancelCircle onClick={closePopUpBox} className="close-pop-up-box-icon"/>
                   </div> }
                   
                  {<div className="pop-up-button-over-image-container">
                       
                       <div className="pop-up-left-side-buttons-div">

                       <AiOutlineShareAlt className="share-icon"/>
                       <button>Share</button>

                        <AiOutlineInfoCircle className="info-icon"/>
                        <button>info</button>

                        </div>
                        <div className="pop-up-right-side-buttons-div">
                            <button className="download-image-button">Download Image</button>
                        </div>
                       </div> }


                            </div>
                    )
                })
            }

        </div>

        </div>
    )
}

export default ImageGallerySectionCards;