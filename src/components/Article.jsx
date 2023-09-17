import { useEffect, useState } from 'react'
import desktopImage from '/images/pattern-divider-desktop.svg'
import mobileImage from '/images/pattern-divider-mobile.svg'
import iconDice from '/images/icon-dice.svg'
import Loading from './Loading'

const fetchAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
  const { slip } = await response.json()
  return slip
}



const Article = () => {
  const [advice, setAdvice] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch advice on mount mount
  useEffect(() => {
    getNewAdvice()
  },[])

  // Function to get new advice
  const getNewAdvice = async () => {
    setLoading(true);
    try {
      const advice = await fetchAdvice();
      setAdvice(advice);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    {loading && (<Loading />)}
      <main className="bg-main-dark-blue min-h-screen py-32 px-5 flex flex-col justify-center">
      <article className="bg-main-dark-grayish-blue rounded-xl px-8 max-w-[37rem] mx-auto"> 
        <header className=" text-main-neon-green font-extrabold text-sm pt-14 pb-8 tracking-[.4rem] text-center">ADVICE #{!error && advice?.slip_id}</header>
        <p className="text-main-light-cyan text-[2rem] text-center leading-[2.7rem] font-main-manrope">
          {error ? 'Oops! Something went wrong. Please try again later.' : advice?.advice}
        </p>
        <figure className='pt-7 pb-[4.8rem]'>
          <picture> 
            <source media="(min-width: 768px)" srcSet={desktopImage} />
            <source media="(max-width: 767px)" srcSet={mobileImage} />
            <img className='w-full' src={mobileImage} alt="Pattern Divider"/>
          </picture>
        </figure>
      </article>
      <footer className="flex justify-center -mt-10 z-30">
        <button 
          className="bg-main-neon-green w-[5.2rem] h-[5.2rem] rounded-full flex items-center justify-center btn-shadow"
          onClick={getNewAdvice}
          disabled={loading}
        >
          <img className="w-8" src={iconDice} alt="dice" />
        </button>
      </footer>
    </main>
    </>
  )
}

export default Article