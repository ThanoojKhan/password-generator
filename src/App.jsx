import { useState } from 'react';
import './App.css';
import Switch from './Components/Switch/Switch';
import { generatePassword } from './Utils/passwordGen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCopy as copyFill } from '@fortawesome/free-solid-svg-icons';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [letter, setLetter] = useState(false)
  const [mix, setMix] = useState(false)
  const [num, setNum] = useState(false)
  const [spl, setSpl] = useState(false)
  const [Password, setPassword] = useState(null)
  const [isCopied, setIsCopied] = useState(false);

  console.log({ letter, mix, num, spl });
  const generate = () => {
    try {
      const res = generatePassword(letter, mix, num, spl)
      setPassword(res)
    } catch (error) {
      setPassword(null)
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        }); 
    }
  }
  const copyPass=()=>{
    setIsCopied(true)
    navigator.clipboard.writeText(Password)
    setTimeout(() => {
      setIsCopied(false);
    },3000)
  }
  return (
    <div className='mt-32 w-full'>
      <h1 className='font-Press text-3xl text-center'>Password Generator</h1>
      <div className="App w-full flex justify-center">
        <div>

          <div className='w-52 mt-10'>
            <div className='flex justify-between my-4'>
              <h1 className='font-Belanosima'>Letters </h1>
              <Switch setFn={setLetter} />
            </div>
            <div className='flex justify-between my-4'>
              <h1 className='font-Belanosima'>Mixed Case </h1>
              <Switch setFn={setMix} />
            </div>
            <div className='flex justify-between my-4'>
              <h1 className='font-Belanosima'>Numbers </h1>
              <Switch setFn={setNum} />
            </div>
            <div className='flex justify-between my-4'>
              <h1 className='font-Belanosima'>Special Characters </h1>
              <Switch setFn={setSpl} />
            </div>

            <div className='flex justify-center'>
              <button onClick={generate} className='bg-black text-white px-2 py-1 rounded border-8 mt-4 border-white  border-dashed'>Generate</button>
            </div>


          </div>
        </div>
      </div>
      {Password&&<div className='flex  justify-center mt-12'>
        <div className='p-3 border w-1/3 flex justify-between'>
          <h1 className=' font-Press'>{Password}</h1>
          <button onClick={copyPass} className=''>{isCopied? <FontAwesomeIcon className='text-lg' icon={copyFill} /> :<FontAwesomeIcon icon={faCopy} />}</button>
        </div>
      </div>}
      <ToastContainer/>
    </div>
  );
}

export default App; 
