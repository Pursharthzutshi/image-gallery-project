import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState([]);


  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos?client_id=vvB6QWwGMAf0-0JBd3hm5ezi8mueXWACatIiv4VWjk4&per_page=50`).then((res)=>{
      console.log(res.data);
    })
  })

  return (
    <div className="App">
{
  data.map((val)=>{
    return(
      <div>
        {val.user.username}
      </div>
    )
  })
}
    </div>
  );
}

export default App;
