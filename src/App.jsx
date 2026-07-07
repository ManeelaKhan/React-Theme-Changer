import { useState } from 'react'

function App() {
  const[darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode?
       'dark h-186 bg-black text-amber-50  flex-col  flex justify-center items-center text-center':
       'light  h-186 bg-white text-black flex flex-col justify-center text-center items-center'}>

      <h1 className='text-3xl font-extraligh underline'>THEME CHANGER</h1>

      <button className='bg-blue-400 text-amber-50 rounded-2xl cursor-pointer h-10 px-10 mt-7'
        onClick={()=> setDarkMode(!darkMode)}>
        {darkMode? '🌙 Dark Mode': '🌞 Light Mode'}
      </button>
    </div>






















  
  
    {/* <div className={darkMode ? "dark" : "light"}>

      <h1>Dark Mode & Light Mode</h1>

      <button onClick={() => setDarkMode(!darkMode)}> */}
{/* setDarkMode(!darkMode)} is k meatlab agar derkMode true ha class="dark" :nahi to light  */}
        {/* {darkMode ? "🌞Light Mode" : "🌙Dark Mode"}
      </button>

    </div> */}
    </>
  );
}

export default App;
