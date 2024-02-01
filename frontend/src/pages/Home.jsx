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

      <div className='w-full h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-md relative'>
        <h1 className='text-2xl text-black font-bold mb-4'>Cost of Your Codeforces Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-md p-2 w-[300px] left-8 relative h-10'
          />

           <img src="https://cdn.iconscout.com/icon/free/png-256/code-forces-3628695-3029920.png" alt="Codeforces account" 
                className='w-10  h-10 relative flex bottom-10 right-5'
              />
            <button
              type='submit'
              className='absolute right-[calc(100px-29px)] top-[calc(50%-12px)] w-8 h-8 bg-[#353535] text-[#fff] rounded-full flex items-center justify-center'
            >
              
              <svg xmlns='http://www.w3.org/2000/svg' className='h-full w-3' fill='none' viewBox='3 3 19 19' stroke='currentColor'>
                <path  strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 12h14M12 5l7 7-7 7' />
              </svg>

             
              
            </button>
                

        </form>
      </div>
      </div>
    </div>
   
  );
};

export default Home;
