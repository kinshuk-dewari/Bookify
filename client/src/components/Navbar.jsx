import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaXmark,FaBlog,FaBars} from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isSticky,setIsStickey] = useState(false);
  

    // toggle menu
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);        
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>100){
                setIsStickey(true);
            }
            else {
                setIsStickey(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])

    // nav items 
    const navItems=[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Shop",path:"/shop"},
        {link:"Sell Book",path:"/admin/dashboard"},
        {link:"Blog",path:"/blog"},
    ]
    return (
    
        <header className='w-full z-20 bg-transparent fixed top-0 left-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
                <div className='flex justify-between items-center text-base'>
                    {/* logo */}
                    <Link to="/" className='text-2xl text-blue-700 flex items-center gap-2 '><FaBlog className='inline-block' />Books</Link>
                    {/* nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link,path})=>
                                <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                            )
                        }
                    </ul>

                    {/* button for lg devices */}
                    <div className='space-x-12 hidden lg:flex  items-center'>
                        <button>
                            <FaBars className='w-5 hover:text-blue-700'/>
                        </button>
                    </div>

                    {/* menu button for mobile devices */}

                    <div className='block md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            { isMenuOpen ? 
                                <FaXmark className='h-5 w-5 text-black ' /> : 
                                <FaBars className='h-5 w-5 text-black ' />
                            }
                        </button>
                    </div>                
                </div>
                {/* nav items for sm devices  */}
                <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden" }`}>
                    {
                        navItems.map(({link,path})=>
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>
                        )
                    }
                </div>
            </nav>
        </header>
  
    )
}

export default Navbar