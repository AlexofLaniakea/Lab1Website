import { useEffect } from "react";

const Home = ({setCount}) => {
  useEffect(()=>{
    setCount(prev=>prev+1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <h1>Home</h1>
      <p>B00910372</p>
    </div>
  
  )
};

export default Home;


