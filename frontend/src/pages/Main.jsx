import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import '../App.css';
const Main = () => {
  const { id } = useParams();
  const [prblm, setPrblm] = useState('');
  const [loading,setLoading] = useState(false);
  const [img,setImg] = useState('');
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://codeforces-account-worth.vercel.app/${id}`)
      .then((response) => {
        setLoading(false);
        setPrblm(response.data.score);
        setImg(response.data.img);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        console.log("GALAT NAAM DALTA H BKL");
        
      });
  }, []);

  return (
    loading?<Spinner/> :(prblm === -1 ? <WrongData /> : <CorrectData img= {img} prblm ={prblm} id={id}/>)
   
  );
  
};

function CorrectData({img,prblm,id}){
    return(
      
<div className="flex flex-col justify items-center h-screen w-full">
  <BackButton />
  <img
    src={img}
    alt="Codeforces account"
    className="border-2 w-50% h-50% rounded-2xl object-cover p-1"
    style={{ marginTop: "51px" }}
  />
  <h6 className='mt-1px font-semibold text-white'>{id}</h6>
  <h1 className="text-3xl text-white mb-3 mt-5 font-bold ">Cost of Your Codeforces Account</h1>
  <h1 className="relative text-5xl font-extrabold text-amber-500">{prblm}$</h1>
</div>





    )
}

function WrongData(){
    return(
    <div className="flex justify-center h-screen w-full items-center">
    <BackButton/>
  <div className='bg-zinc-800 p-8 rounded-lg shadow-2xl text-5xl text-center text-red-600 font-extrabold'>
    Wrong Username
  </div>
</div>
    )
}
export default Main;


