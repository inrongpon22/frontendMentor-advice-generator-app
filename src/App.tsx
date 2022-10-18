import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import patternMobile from './assets/images/pattern-divider-mobile.svg'
import patternDesktop from './assets/images/pattern-divider-desktop.svg'

function App() {
  const [advice, setAdvice] = useState([]);
  const [getId, setGetId] = useState('');

  const getAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    setAdvice(data.slip.advice)
    setGetId(data.slip.id)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className='h-screen flex justify-center items-center'>
      <main className="App font-manrope bg-[#323A49] rounded-md m-2 md:w-[20rem]">
      <div className='px-5 py-3'>
        <h1 className='text-[#52FFA8] text-xs'>
          Advice #{getId}
        </h1>
        <h3 className='text-[#CEE3E9]'>
          "{advice}"
        </h3>
        <div className='mt-4 flex justify-center'>
          <picture>
            <source media='(min-width: 768px)' srcSet={patternDesktop} />
            <img src={patternMobile} alt="" />
          </picture>
        </div>
        <button className='bg-[#52FFA8] p-2 rounded-full translate-y-7'
        onClick={getAdvice}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/>
          </svg>
        </button>
      </div>
    </main>
    </div>
  )
}

export default App
