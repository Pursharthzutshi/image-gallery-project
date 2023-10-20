import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ImageGallerySection.css"
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike";
import ImageGallerySectionCards from "./ImageGallerySectionCards";
import "./ImageGallerySectionResponsive.css"

function ImageGallerySection({searchBarValue,apiDataset}){


        return(
        <div className="gallery-image-section">
                <ImageGallerySectionCards apiDataset={apiDataset} searchBarValue={searchBarValue}/>
        </div>
    )
}

export default ImageGallerySection;