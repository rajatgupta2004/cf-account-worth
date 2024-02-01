import React, { useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted username:', username);
    window.history.pushState(null, null, `/${username}`);
    window.location.reload();
  };

  return (
    <div class='bg-animation'>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      

     
      <div class='w-screen h-screen flex justify-center items-center'>
  <div class='bg-[#0e1011] p-8 rounded-lg shadow-md relative flex flex-col items-center'>
    <h1 class='text-2xl text-white font-bold mb-4'>Decode Your Worth</h1>
    <h2 class='text-sm text-slate-100 mb-4'>Where Ratings, Problems, and Contributions Unite!</h2>
    <form onSubmit={handleSubmit} class='flex flex-col items-center'>
      <div class='relative flex items-center'>
        <img
          src='https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png'
          alt='Codeforces account'
          class='w-10 h-10 mr-2'
        />
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={handleInputChange}
          class='justify bg-[#3b3b3b] items-center border border-gray-300 rounded-md p-2 w-[300px] relative h-10 text-white'
        />
        <button
          type='submit'
          class='absolute right-1 top-1/2 transform -translate-y-1/2 text-[#353535] rounded-full w-8 h-8'
        >
          <img src='https://cdn-icons-png.flaticon.com/128/751/751381.png' alt='Search icon' className='w-8 h-8'/>
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
   
  );
};

export default Home;
