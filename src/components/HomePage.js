import React from 'react';
// import backgroundImage

// const styles = {
//     backgroundImage: `url('./college.jpg')`, // relative path to the image file
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     // backgroundRepeat: 'no-repeat',
//     // height: '100vh',
//   };


function HomePage() {
  return (
    <div className='homepage'>
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      
    >
      {/* <h1 className="text-black text-4xl font-bold absolute top-20 left-1/2 transform -translate-x-1/2">
        Welcome to PICT SIS
      </h1> */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded-lg shadow-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded-lg shadow-md outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <form className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-4 rounded-lg shadow-md outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded-lg shadow-md outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded-lg shadow-md outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
