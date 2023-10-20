import {useEffect, useState} from "react";
import axios from "axios";
import TopBar from "../components/TopBar/TopBar";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import ImageGallerySection from "../components/ImageGallerySection/ImageGallerySection";

import "./HomePage.css"

function HomePage() {

  const [searchBarValue,setSearchBarValue] = useState("");
  const [apiDataset,setApiDataset] = useState([]);
        
   useEffect(()=>{
    // https://api.unsplash.com?client_id=xezgxIa4kfeWTBmOKNXY6t6oQIY5W37GoQc7YAw7ZAE&page=50
    
    axios.get(`https://api.unsplash.com/photos?client_id=vvB6QWwGMAf0-0JBd3hm5ezi8mueXWACatIiv4VWjk4&per_page=20`).then((res)=>{
      console.log(res)
      setApiDataset(res.data)
  });
    
  },[apiDataset])
 
  return (
      <div className='home-page'>
      <TopBar searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}/>
      <HeaderSection setSearchBarValue={setSearchBarValue}/>
      <ImageGallerySection apiDataset={apiDataset} searchBarValue={searchBarValue}/>
      </div>
  );
}

export default HomePage;
