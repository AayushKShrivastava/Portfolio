import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import logo from '../assets/logo.png'
import {Link} from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = React.useState(false)
    const handleClick = () => setNav(prevNav => !nav)
  return (
    <div  className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt='logo' style={{width:'80px'}}/>
        </div>

        {/*Menu*/}

        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <li>
                <a className='flex justify-between items-center w-full item-gray-300' 
                    href='https://drive.google.com/file/d/1SQQZWl7mA8yABiRLeU7qsY8D0cHvTjNv/view?usp=sharing'>
                    Resume
                </a>
            </li>
        </ul>

        {/*Hamburger*/}

        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile Menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full bg-[#0a192f] h-screen flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <a className='flex justify-between items-center w-full item-gray-300' 
                    href='https://drive.google.com/file/d/1SQQZWl7mA8yABiRLeU7qsY8D0cHvTjNv/view?usp=sharing'>
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>

        {/*Social Icons*/}

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full item-gray-300' 
                        href='https://drive.google.com/file/d/1SQQZWl7mA8yABiRLeU7qsY8D0cHvTjNv/view?usp=sharing'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full item-gray-300' 
                        href='https://www.linkedin.com/in/aayush-kumar-shrivastava-920450193/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full item-gray-300' 
                        href='https://github.com/AayushKShrivastava'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <Link to="contact" smooth={true} duration={500} 
                        className='flex justify-between items-center w-full item-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </Link>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar