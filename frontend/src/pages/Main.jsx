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
  const url = `https://codeforces.com/profile/${id}`;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://cf-account-worth.vercel.app/${id}`)
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
    loading?<Spinner/> :(prblm === -1 ? <WrongData id= {id} /> : <CorrectData url = {url} img= {img} prblm ={prblm} id={id}/>)
   
  );
  
};

function CorrectData({img,prblm,id,url}){
    return(
      
<div className="flex flex-col justify items-center h-screen w-full py-10">
  <BackButton />
  <img
    src={img}
    alt="Codeforces account"
    className="border-2 w-30 h-30 rounded-2xl object-cover p-1 mt-1"
    style={{ marginTop: "70px" }}
  />
  <a href={url} target="_blank" >
  <h6 className='mt-3 font-semibold text-white border-2 rounded-2xl py-1 px-3'>{id}</h6>

  </a>
  <h1 className="text-3xl text-white mb-3 mt-5 font-bold ">Worth of Your CF Account</h1>
  <h1 className="relative text-5xl font-extrabold text-amber-500">{prblm}$</h1>
</div>





    )
}

function WrongData({id}){
    return(
    <div className="flex justify-center h-screen w-full items-center">
    <BackButton/>
  <div className='bg-zinc-800 p-8 rounded-lg shadow-2xl  text-center  font-extrabold'>
    <h1 className='text-red-500 text-3xl'>{id}</h1>
    <h2 className='text-white text-2xl'>Doesn't Exist on CodeForces</h2>
  </div>



</div>
    )
}
export default Main;


