import { useEffect } from "react";

const Home = ({setCount}) => {
  useEffect(()=>{
    setCount(prev=>prev+1);
  },[])
  return (
    <div>
      <h1>Home</h1>
      <p>B00910372</p>
    </div>
  
  )
};

export default Home;


