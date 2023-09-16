import desktopImage from '../public/images/pattern-divider-desktop.svg'
import mobileImage from '../public/images/pattern-divider-mobile.svg'

function App() {

  return (
  <>
    <main className="bg-main-dark-blue min-h-screen py-32 px-5 flex flex-col justify-center">
      <article className="bg-main-dark-grayish-blue rounded-xl px-8 max-w-[37rem] mx-auto"> 
        <header className=" text-main-neon-green font-extrabold text-sm pt-14 pb-8 tracking-[.4rem] text-center">ADVICE #117</header>
        <p className="text-main-light-cyan text-[2rem] text-center leading-[2.7rem] font-main-manrope">It is easy to sit up and take notice, what is difficult is getting up and taking action</p>
        <figure className='pt-7 pb-[4.8rem]'>
          <picture> 
            <source media="(min-width: 768px)" srcSet={desktopImage} />
            <source media="(max-width: 767px)" srcSet={mobileImage} />
            <img className='w-full' src={mobileImage} alt="Pattern Divider"/>
          </picture>
        </figure>
      </article>
      <footer className="flex justify-center -mt-10 z-50">
        <button 
          className="bg-main-neon-green w-[5.2rem] h-[5.2rem] rounded-full flex items-center justify-center btn-shadow"
        >
          <img className="w-8" src="/public/images/icon-dice.svg" alt="dice" />
        </button>
      </footer>
    </main>
  </>
)
}

export default App
