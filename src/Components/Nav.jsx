import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants"
import {useState} from 'react'


const Nav = () => {
    const [show, setShow] = useState(false);
    const HadleCLick = ()=> {
        setShow(!show)
    }

  return (
 <>
 <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
        <a href="/">
        <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
         {navLinks.map((item)=> (
             <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray ">{item.label}</a>

             </li>
         ))}
        </ul>
        <div className="hidden max-lg:block   w-[200px]  ">
            <img onClick={HadleCLick} src={hamburger} alt="hamburger-menu" width={25} height={25} className="ml-36" />
        </div>
        <ul className={ ` ${show? 'hidden': ' '} flex flex-col items-center gap-3 mt-[200px] mr-[25px]  right-0 absolute  md:hidden ` }  >
         {navLinks.map((item)=> (
             <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray ">{item.label}</a>

             </li>
         ))}
        </ul>
    </nav>
 </header>
 </>
  )
}

export default Nav